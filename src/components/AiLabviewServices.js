import React from 'react';
import '../styles/AiLabview.css'; // Create this CSS based on your existing Aerospace.css
import ImgDeepLTK from '../assets/deepltk.jpg';
import ImgCuLab from '../assets/culab.jpg';
import ImgFpga from '../assets/fpga-addon.jpg';
import ImgNNotate from '../assets/nnotate.jpg';

const aiServices = [
  {
    id: 1,
    title: "DeepLTK",
    description: "Build, train and deploy deep neural networks entirely in LabVIEW, without external frameworks like TensorFlow or PyTorch.",
    image: ImgDeepLTK,
    tag: "AI/ML",
  },
  {
    id: 2,
    title: "CuLab",
    description: "Accelerate LabVIEW code up to 100x using GPU computing, with an intuitive API designed for engineers.",
    image: ImgCuLab,
    tag: "GPU Acceleration",
  },
  {
    id: 3,
    title: "DeepLTK FPGA Add-On",
    description: "Deploy neural networks to FPGAs for high-speed inference with ultra-low latency and power consumption.",
    image: ImgFpga,
    tag: "FPGA Acceleration",
  },
  {
    id: 4,
    title: "NNotate",
    description: "Intuitive image/video annotation tool with support for object labeling and statistical analysis for model training.",
    image: ImgNNotate,
    tag: "Computer Vision",
  },
];

const AiLabviewServices = () => {
  return (
    <div className="ai-labview-page">
      {/* ✅ Hero Section */}
      <section className="ai-hero">
        <h1 className="hero-title">AI & Acceleration Solutions for LabVIEW</h1>
        <p className="hero-subtitle">
          Integrated toolchain for building, accelerating, and deploying deep learning applications with LabVIEW.
        </p>
      </section>

      {/* ✅ Services Grid */}
      <section className="ai-services">
        <div className="container">
          <h2 className="section-title">Our AI-Powered Solutions</h2>
          <div className="services-grid">
            {aiServices.map((item) => (
              <div className="service-card" key={item.id}>
                <div className="service-image">
                  <img src={item.image} alt={item.title} className="service-img" loading="lazy" />
                </div>
                <div className="service-info">
                  <h3 className="service-title">{item.title}</h3>
                  <p className="service-description">{item.description}</p>
                  <div className="service-tag">{item.tag}</div>
                  <button className="service-cta">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Platform Stack (Optional) */}
      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title">Powered by</h2>
          <div className="tech-stack-grid">
            <div className="tech-item">
              <h3>Platform</h3>
              <p>LabVIEW, Windows, Real-Time Systems</p>
            </div>
            <div className="tech-item">
              <h3>Acceleration</h3>
              <p>NVIDIA CUDA, Xilinx FPGA, Multicore CPU</p>
            </div>
            <div className="tech-item">
              <h3>Data & Training</h3>
              <p>Vision Datasets, NNotate, DeepLTK</p>
            </div>
            <div className="tech-item">
              <h3>Deployment</h3>
              <p>PXI, CompactRIO, GPUs, FPGAs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiLabviewServices;
