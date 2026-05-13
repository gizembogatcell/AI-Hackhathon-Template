"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button, Flex, Spin, Typography } from "antd";

import { useAuth } from "@/hooks/use-auth";

const { Title, Paragraph } = Typography;

export default function AppGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <Flex align="center" justify="center" style={{ minHeight: "100vh" }}>
        <Spin size="large" />
      </Flex>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <Flex
        justify="space-between"
        align="center"
        style={{
          padding: "12px 24px",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Link href="/">
          <Title level={5} style={{ margin: 0 }}>
            Hackathon app
          </Title>
        </Link>
        <Flex gap="small" align="center">
          <Paragraph style={{ margin: 0 }} type="secondary" ellipsis>
            {user.email}
          </Paragraph>
          <Button size="small" onClick={() => signOut()}>
            Sign out
          </Button>
        </Flex>
      </Flex>
      {children}
    </div>
  );
}
