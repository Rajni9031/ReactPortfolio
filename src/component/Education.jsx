import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function Education() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ color: "#edede8", textAlign: "center", pt: "5%" }}
        id="Education"
      >
        Education
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
            <Box sx={{ color: "#edede8", ml: "10%" }}>
              <Typography variant="h6">Bachelor of Technology</Typography>
              <Typography>National Institute of Technology</Typography>
              <Typography>Jamshedpur</Typography>
              <Typography>CGPA: 7.80</Typography>
              <Typography>
                <CalendarMonthIcon /> 2021-current
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
            <Box sx={{ color: "#edede8", mr: "10%" }}>
              <Typography variant="h6">12th Grade</Typography>
              <Typography>Ramakrishna Mission English School</Typography>
              <Typography>ISC Board, Delhi</Typography>
              <Typography>Percentage: 89%</Typography>
              <Typography>
                {" "}
                <CalendarMonthIcon /> 2018-2020
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ background: "hsla(41, 100%, 50%, 0.89)" }} />
            {/* <TimelineConnector /> */}
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ color: "#edede8", ml: "10%" }}>
              <Typography variant="h6">10th Grade</Typography>
              <Typography>Ramakrishna Mission English School</Typography>
              <Typography>ICSC Board, Delhi</Typography>
              <Typography>Percentage: 95%</Typography>
              <Typography>
                <CalendarMonthIcon /> till - 2018
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
