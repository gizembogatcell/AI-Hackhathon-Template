import { Flex, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function DashboardPage() {
  return (
    <Flex vertical gap="small" style={{ padding: 24 }}>
      <Title level={3} style={{ marginTop: 0 }}>
        Dashboard
      </Title>
      <Paragraph>
        This route is behind the client auth guard in{" "}
        <code>(app)/layout.tsx</code>.
      </Paragraph>
    </Flex>
  );
}
