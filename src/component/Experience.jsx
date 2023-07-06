import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export default function Experience() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ color: "#edede8", textAlign: "center", pt: "5%" }}
        id="Experience"
      >
        Experience
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ background: "hsla(41, 100%, 50%, 0.89)" }} />
            <TimelineConnector
              sx={{ background: "hsla(41, 100%, 50%, 0.89)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ color: "#edede8", textAlign:{md: "justify"} }}>
              <Typography variant="h6">Web Developer Intern</Typography>
              <Typography>
                CodSoft
                <CalendarMonthIcon />  July 2023 - Present
              </Typography>
              <Typography variant="caption">
                A web development internship where I am working on a project
                titled "CodSoft". This project is aimed to build a platform for
                coders to share their code and learn from others. I am working
                on the frontend of the project using ReactJS.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ background: "hsla(41, 100%, 50%, 0.89)" }} />
            <TimelineConnector
              sx={{ background: "hsla(41, 100%, 50%, 0.89)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ color: "#edede8", textAlign: "right" }}>
              <Typography variant="h6">ICMMMI - 2024</Typography>
              <Typography>
                National Institute of Technology,Jamshedpur <CalendarMonthIcon /> June 2023 - Present
              </Typography>
              <Box sx={{textAlign:{md: "justify"}}}>
              <Typography variant="caption">
                  ICMMMI is an international conference organized by National Institute of Technology 
                  Jamshedpur. I am working as a web developer in the team. I am working on the frontend of the project using ReactJS.

              </Typography>
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ background: "hsla(41, 100%, 50%, 0.89)" }} />
            <TimelineConnector
              sx={{ background: "hsla(41, 100%, 50%, 0.89)" }}
            />
          </TimelineSeparator>
          {/* <TimelineContent>
            <Box sx={{ color: "#edede8", textAlign:{md: "justify"} }}>
              <Typography variant="h6">Software Developer</Typography>
              <Typography>
                Riverbend Data Solutions, Hyderabad (remote),{" "}
                <CalendarMonthIcon /> Jun 2022 - Aug 2022
              </Typography>
              <Typography variant="caption">
                I was part of project titled "iclinic". This project was aimed
                to build a digital health care platform. As part of the project,
                I have worked on technologies and fields such as react native,
                JavaScript’s, frontend - backend development frameworks(MERN).
                Fabricating complete product development, system design and
                architecture.
              </Typography>
            </Box>
          </TimelineContent> */}
        </TimelineItem>
      </Timeline>
    </>
  );
}
