"use client";

import { Button, Flex, Typography } from "antd";

import { useAuth } from "@/hooks/use-auth";

const { Text } = Typography;

export default function FirebaseTestPage() {
  const { user, loading, firebaseConfigured, signInWithGoogle, signOut } =
    useAuth();

  const status = loading
    ? "Loading…"
    : !firebaseConfigured
      ? "Firebase not configured — copy .env.local.example to .env.local"
      : user
        ? `Signed in as ${user.email}`
        : "Signed out";

  async function handleClick() {
    if (user) {
      await signOut();
    } else {
      await signInWithGoogle();
    }
  }

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      gap="small"
      style={{ minHeight: "100vh" }}
    >
      <Button
        type="primary"
        size="large"
        loading={loading}
        disabled={!firebaseConfigured}
        onClick={handleClick}
      >
        {user ? "Log out" : "Log in with Google"}
      </Button>
      <Text type="secondary">{status}</Text>
    </Flex>
  );
}
