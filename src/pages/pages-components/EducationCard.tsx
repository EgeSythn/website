import {
  Container,
  Card,
  Flex,
  Image,
  Stack,
  Accordion,
  Text,
  Button,
  Title,
  Badge,
  Group,
  Table,
  Center,
  Divider,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconPencil,
  IconBackpack,
  IconCertificate,
  IconExternalLink,
} from "@tabler/icons-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect, useRef } from "react";

interface EducationCardProps {
  institution: string;
  degree: string;
  study: string;
  startDate: string;
  endDate: string;
  totalCredits: string;
  gpa: string;
  image: string;
  location: string;
  skills: { name: string; skills: string[]; note: string }[];
  certifications: { name: string; source: string }[];
  termData: {
    name: string;
    courses: string[];
    cumulative: number | null;
    gpa: number | null;
    deans: string;
    notes: string;
  }[];
}

function EducationCard(props: EducationCardProps) {
  const {
    institution,
    degree,
    study,
    startDate,
    endDate,
    totalCredits,
    gpa,
    image,
    location,
    skills,
    certifications,
    termData,
  } = props;

  const [selectedTerm, setSelectedTerm] = useState<
    { name: string; courses: string[] } | undefined
  >(undefined);

  const institution_control = (
    <>
      <Flex direction="row" gap="md" align="center">
        {useMediaQuery("(min-width: 600px)") && <IconBackpack size={25} />}
        <Text size={25} fw={700}>
          {institution}
        </Text>
      </Flex>
    </>
  );

  interface TooltipProps {
    active?: boolean;
    payload?: any;
    label?: string;
  }

  const CustomTooltip: React.FC<TooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #999",
            width: "100px",
            margin: "0 auto",
            padding: "10px",
            borderRadius: "10px",
            flexWrap: "wrap",
          }}
        >
          <center>
            <Text style={{ color: "black" }}>
              <strong>{`${label}`}</strong>
            </Text>
            <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
            {payload[0] ? (
              <Text
                style={{ marginTop: "3px" }}
                size={14}
                fw={500}
                color="blue"
              >{`${payload[0].payload.deans}`}</Text>
            ) : (
              <Text style={{ marginTop: "3px" }} size={14}></Text>
            )}
            {payload[1] ? (
              <Text style={{ marginTop: "3px", color: "black" }} size={14}>
                <strong>Term GPA:</strong> <br /> {payload[1].value.toFixed(2)}
              </Text>
            ) : (
              <Text style={{ marginTop: "3px", color: "black" }} size={14}>
                <strong>Term GPA:</strong> <br /> Not Applicable
              </Text>
            )}
            {payload[0] ? (
              <Text style={{ marginTop: "3px", color: "black" }} size={14}>
                {" "}
                <strong>Cumulative GPA:</strong> <br />{" "}
                {payload[0].value.toFixed(2)}
              </Text>
            ) : (
              <Text style={{ marginTop: "3px", color: "black" }} size={14}>
                Cumulative GPA: <br /> Not Applicable
              </Text>
            )}
            {payload[0] ? (
              <Text
                style={{ marginTop: "3px" }}
                size={9}
                color="red"
              >{`${payload[0].payload.notes}`}</Text>
            ) : (
              <Text style={{ marginTop: "3px" }} size={9}></Text>
            )}
          </center>
        </div>
      );
    }

    return null;
  };

  const institution_panel = (
    <>
      <Flex direction="row" align="flex-start" wrap="wrap">
        {!useMediaQuery("(max-width: 600px)") && (
          <Image
            maw={200}
            radius="md"
            src={image}
            style={{ paddingRight: "2.5%" }}
          />
        )}
        <Stack align="flex-start" style={{ paddingBottom: "2.5%" }}>
          <Text size={15} fw={500}>
            <strong>Degree:</strong> {degree}
          </Text>
          <Text size={15} fw={500}>
            <strong>Areas of Study:</strong> {study}
          </Text>
          <Text size={15} fw={500}>
            <strong>Location:</strong> {location}
          </Text>
          <Text size={15} fw={500}>
            <strong>Attendance:</strong> {startDate} - {endDate}
          </Text>
          <Text size={15} fw={500}>
            <strong>Total Credits:</strong> {totalCredits}
          </Text>
          <Text size={15} fw={500}>
            <strong>Cumulative GPA:</strong> {gpa}
          </Text>
        </Stack>
      </Flex>
      <Flex direction="column" align="center" style={{ paddingBottom: "2.5%" }}>
        <Title style={{ paddingTop: "2.5%" }}>
          <center>Progress Across Terms</center>
        </Title>
        <ResponsiveContainer width="110%" height={400}>
          <LineChart
            data={termData}
            onClick={(data: any) => {
              const term = termData.find(
                (term) => term.name === data.activeLabel
              );
              if (term) {
                setSelectedTerm(term);
              }
            }}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              interval={0}
              height={100}
              fontSize={useMediaQuery("(min-width: 600px)") ? "12px" : "10px"}
            />
            <YAxis
              domain={[3.5, 4.0]}
              type="number"
              dataKey="gpa"
              ticks={[3.5, 3.6, 3.7, 3.8, 3.9, 4.0]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              align="center"
              layout="horizontal"
              wrapperStyle={{ padding: "10px 0", fontSize: "12px" }}
            />
            <Line
              type="monotone"
              dataKey="gpa"
              stroke="#58D68D"
              fill="#58D68D"
              activeDot={{ r: 7 }}
              dot={{
                r: 2,
              }}
              connectNulls={true}
              name="Term GPA"
            />
            <Line
              type="monotone"
              dataKey="cumulative"
              stroke="#ff0000"
              fill="#ff0000"
              dot={{
                r: 2,
              }}
              activeDot={{ r: 7 }}
              isAnimationActive={false}
              connectNulls={true}
              name="Cumulative GPA"
            />
          </LineChart>
        </ResponsiveContainer>
      </Flex>

      {selectedTerm ? (
        <Table>
          <thead>
            <tr>
              <th>
                <center>
                  <Title order={3}>Courses Taken in {selectedTerm.name}</Title>
                </center>
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedTerm.courses.map((course, index) => (
              <tr key={index}>
                <td>{course}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <center>
          <Text>Select a term to view courses taken.</Text>
        </center>
      )}
    </>
  );

  const skills_control = (
    <>
      <Flex direction="row" gap="md" align="center">
        {useMediaQuery("(min-width: 600px)") && <IconPencil size={25} />}
        <Text size={25} fw={700}>
          Skills
        </Text>
      </Flex>
    </>
  );

  const skills_panel = (
    <Stack style={{ paddingTop: "2.5%" }}>
      {skills.map((skill, index) => {
        return (
          <div key={skill.name}>
            <Text size={20} fw={500} style={{ paddingLeft: "2.5%" }}>
              {skill.name}
            </Text>
            {skill.note && (
              <Text size={10} fw={200} style={{ paddingLeft: "2.5%" }}>
                * {skill.note}
              </Text>
            )}
            <Flex
              wrap="wrap"
              align="start"
              gap={5}
              style={{
                paddingTop: "1.5%",
                paddingLeft: "1.5%",
                paddingBottom: "2.5%",
              }}
            >
              {skill.skills.map((sk, index) => (
                <Badge
                  key={`${skill.name}-${index}`}
                  fw={500}
                  size="lg"
                  style={{ margin: "0.25rem" }}
                >
                  {sk}
                </Badge>
              ))}
            </Flex>
          </div>
        );
      })}
    </Stack>
  );

  const certifications_control = (
    <Flex direction="row" gap="md" align="center">
      {useMediaQuery("(min-width: 600px)") && <IconCertificate size={25} />}
      <Text size={25} fw={700}>
        Kaggle Certifications
      </Text>
    </Flex>
  );

  const certifications_panel = (
    <Group style={{ paddingTop: "2.5%" }}>
      {certifications.map((cert) => (
        <Card
          key={`Certification ${cert.name}`}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          <Flex direction="column" gap="md" align="center">
            <Text key={cert.name} size={15} fw={500}>
              {cert.name}
            </Text>
            <Button
              variant="outline"
              radius="xl"
              rightIcon={<IconExternalLink size={15} />}
              onClick={() => window.open(cert.source, "_blank")}
            >
              Certificate
            </Button>
          </Flex>
        </Card>
      ))}
    </Group>
  );

  return (
    <Container style={{ paddingTop: "5%" }}>
      <Title order={2} style={{ paddingBottom: "2.5%" }}>
        College
      </Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Accordion multiple={true} defaultValue={[institution]} defaultChecked>
          <Accordion.Item value={institution} style={{ borderBottom: "none" }}>
            <Accordion.Control>{institution_control}</Accordion.Control>
            <Accordion.Panel>{institution_panel}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Card>
      <Title order={2} style={{ paddingTop: "5%", paddingBottom: "2.5%" }}>
        Skills & Certifications
      </Title>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Accordion multiple={true} defaultValue={["Skills"]}>
          <Accordion.Item value="Skills">
            <Accordion.Control>{skills_control}</Accordion.Control>
            <Accordion.Panel>{skills_panel}</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item
            value="Certifications"
            style={{ borderBottom: "none" }}
          >
            <Accordion.Control>{certifications_control}</Accordion.Control>
            <Accordion.Panel>{certifications_panel}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Card>
    </Container>
  );
}

export default EducationCard;
