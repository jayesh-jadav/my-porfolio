import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import { colors } from "../../Config/theme";
import useStyles from "./styles";

// Custom styles for the CircularProgress container
const CircularContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px",
}));

// Custom text inside the circular progress
const CircularText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  fontWeight: "bold",
}));

const skills = [
  { name: "React JS", level: 70, color: "success.main" },
  { name: "HTML", level: 95, color: "success.main" },
  { name: "CSS", level: 90, color: "success.main" },
  { name: "JavaScript", level: 85, color: "success.main" },
];

function Skills() {
  const [visible, setVisible] = useState(false); // Track visibility of the section
  const [progress, setProgress] = useState(
    skills.map(() => 0) // Initialize progress for each skill at 0
  );
  const className = useStyles();

  useEffect(() => {
    const handleScroll = (entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      // Increment progress for each skill gradually
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress.map((value, index) =>
            value < skills[index].level ? value + 1 : value
          )
        );
      }, 20);

      return () => clearInterval(interval);
    }
  }, [visible]);

  return (
    <Grid container className={className.container}>
      <Grid size={{ xs: 11, md: 9 }}>
        <Grid className={className.mainHeader}>
          <Typography variant="title" style={{ color: colors.primary }}>
            Skills
          </Typography>
          <Typography variant="subTitle" color="textSecondary" gutterBottom>
            A showcase of my proficiency levels
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid
              size={{ xs: 12, sm: 3 }}
              key={index}
              sx={{ textAlign: "center" }}
            >
              <CircularContainer>
                <CircularProgress
                  variant="determinate"
                  value={progress[index]}
                  size={80}
                  thickness={6}
                  sx={{
                    color: skill.color,
                    transform: "rotate(-90deg) !important",
                  }}
                />
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={80}
                  thickness={6}
                  sx={{
                    color: "rgba(0, 0, 0, 0.1)", // Light gray background
                    position: "absolute",
                  }}
                />
                <CircularText
                  variant="h6"
                  color={progress[index] < 0 ? "error" : "textPrimary"}
                >
                  {progress[index]}%
                </CircularText>
              </CircularContainer>
              <Typography variant="h6" fontWeight="bold">
                {skill.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skills;
