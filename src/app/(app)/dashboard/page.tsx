"use client";

import { Alert, Card, Flex, Spin, Typography } from "antd";
import { useEffect, useState } from "react";

import { useAuth } from "@/hooks/use-auth";
import type { UserProfile } from "@/types/user";

const { Title, Paragraph } = Typography;

export default function DashboardPage() {
  const { getIdToken } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const token = await getIdToken();
        if (!token) {
          if (!cancelled) setLoading(false);
          return;
        }
        const res = await fetch("/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const body = await res.json();
        if (cancelled) return;
        if (!res.ok) {
          setError(body?.error?.message ?? "Request failed");
        } else {
          setProfile(body.data as UserProfile);
        }
      } catch (e: unknown) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Request failed");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [getIdToken]);

  return (
    <Flex vertical gap="small" style={{ padding: 24 }}>
      <Title level={3} style={{ marginTop: 0 }}>
        Dashboard
      </Title>
      <Paragraph>
        This route is behind the client auth guard in{" "}
        <code>(app)/layout.tsx</code>. The profile below is fetched from{" "}
        <code>/api/users/me</code> (Firebase-verified, MongoDB-backed).
      </Paragraph>
      <Card title="Your MongoDB profile">
        {loading ? (
          <Spin />
        ) : error ? (
          <Alert type="error" title={error} />
        ) : profile ? (
          <pre style={{ margin: 0 }}>{JSON.stringify(profile, null, 2)}</pre>
        ) : (
          <Paragraph type="secondary" style={{ margin: 0 }}>
            Not signed in.
          </Paragraph>
        )}
      </Card>
    </Flex>
  );
}
