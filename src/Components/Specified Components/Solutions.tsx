import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./Solutions.css";

// Images
import soc3d from "../../assets/soc_3d.png"; // Placeholder usage
import cyber3d from "../../assets/cyber_3d.png"; // Placeholder usage
import pentest3d from "../../assets/pentest_3d.png"; // Placeholder usage
import chain from "../../assets/chain.png"; // Placeholder usage
import cloud3d from "../../assets/cloud_3d.png"; // Placeholder usage

export default function Solutions() {
  return (
    <Box id="services" sx={{ px: { xs: 3, md: 5 }, pt: { xs: 4, md: 4 }, pb: { xs: 8, md: 8 }, bgcolor: "#fff" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          mb={6}
          sx={{
            fontWeight: 900,
            textAlign: "center",
            maxWidth: "900px",
            mx: "auto",
            letterSpacing: "-0.03em",
            fontSize: { xs: "2rem", md: "2.8rem" },
            color: "#000"
          }}
        >
          Security Solutions Designed to <span style={{
            background: "linear-gradient(90deg, #8A2BE2, #4B0082)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Enhance Resilience</span>
        </Typography>
      </motion.div>

      <section className="bento-grid">

        {/* 1. Infrastructure Security REMOVED */}

        {/* 2. 24/7 SOC (b8 -> eight) */}
        <div className="card graphic" style={{
          backgroundImage: `url(${soc3d})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}>
          <h3>24/7 SOC</h3>
          <p>Continuous Monitoring | Incident Response</p>
        </div>

        {/* 5. AI Threat (b11 -> eleven) */}
        <div className="card ar" style={{
          backgroundImage: `url(${chain})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff'
        }}>
          <div className="overlay" style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
            zIndex: 1
          }}></div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3>AI Threat<br />Detection</h3>
            <p>ML-Driven Analysis | Automated Response</p>
          </div>
        </div>

        {/* 3. Cyber Defense (b9 -> nine) */}
        <div className="card cyber" style={{
          backgroundImage: `url(${cyber3d})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <h3>Cyber<br />Defense</h3>
          <button>Learn More</button>
        </div>

        {/* 4. Pentesting (b10 -> ten) */}
        <div className="card vfx" style={{
          backgroundImage: `url(${pentest3d})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff'
        }}>
          <div className="overlay" style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
            zIndex: 1
          }}></div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3>Pentesting</h3>
            <p>Vulnerability Assessment | Ethical Hacking</p>
          </div>
        </div>

        {/* 6. Cloud Security (b12 -> twelve) */}
        <div className="card marketing" style={{
          backgroundImage: `url(${cloud3d})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff'
        }}>
          <div className="overlay" style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
            zIndex: 1
          }}></div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3>Cloud Security</h3>
            <button style={{ color: '#000', background: '#fff' }}>Secure Cloud</button>
          </div>
        </div>

      </section>
    </Box>
  );
}
