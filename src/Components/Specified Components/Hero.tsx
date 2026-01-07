import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import FloatingLines from "./FloatingLines";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Simplified set

const DecryptText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState(() =>
    text.split("").map(() => characters[Math.floor(Math.random() * characters.length)]).join("")
  );

  useEffect(() => {
    let iteration = 0;
    let interval: any = null;

    const startAnimation = () => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              // Keep spaces as spaces to prevent word-jump
              if (char === " ") return " ";
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text);
        }

        iteration += 0.15; // Slightly faster for better feel
      }, 30);
    };

    const timeout = setTimeout(startAnimation, delay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, delay]);

  return <Box component="span" sx={{ display: "inline-block", minWidth: `${text.length}ch` }}>{displayText}</Box>;
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
        gap: { xs: 4, md: 6 },
        px: { xs: 4, md: 8 },
        pt: { xs: 6, md: 8 },
        pb: { xs: 2, md: 2 },
        alignItems: "center",
        minHeight: "80vh",
        overflow: "hidden",
        position: "relative",
        bgcolor: "#ffffff" // Explicit white background
      }}
    >
      {/* FloatingLines Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // Set to 0, text is at 1. Background white is inherited/implicit at -1 sort of.
          opacity: 1 // Full opacity for lines
        }}
      >
        <FloatingLines
          lineCount={[8]}
          lineDistance={[0.2]}
          animationSpeed={0.5}
          linesGradient={['#8A2BE2', '#4B0082']} // Violet colors
          mixBlendMode="normal"
        />
      </Box>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "4rem", md: "6rem" },
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            fontFamily: "monospace",
            color: "#000" // Black text for white bg
          }}
        >
          <DecryptText text="CYBER" /> <br />
          <span style={{
            background: "linear-gradient(90deg, #8A2BE2, #DA70D6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            <DecryptText text="SECURITY" delay={500} />
          </span>
        </Typography>

        <Box mt={5} display="flex" gap={2}>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: "linear-gradient(45deg, #8A2BE2, #4B0082)", // Violet Gradient
              color: "#fff",
              borderRadius: "50px",
              px: 6,
              py: 2,
              fontSize: "1.1rem",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "0 10px 20px rgba(138, 43, 226, 0.3)",
              "&:hover": {
                boxShadow: "0 15px 30px rgba(138, 43, 226, 0.5)",
                transform: "translateY(-2px)"
              },
              transition: "all 0.3s ease"
            }}
            onClick={() => navigate("/contact")}
          >
            Get Started
          </Button>
        </Box>
      </motion.div>

      {/* Spline Restored */}
      <Box sx={{ height: "100%", minHeight: "500px", display: { xs: "none", md: "block" }, position: 'relative', zIndex: 1 }}>
        <Spline scene="https://prod.spline.design/JIp1buFm132wAPfM/scene.splinecode" />
      </Box>
    </Box>
  );
}
