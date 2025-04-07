import Countdown from './Countdown';
import EmailForm from './EmailForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../LandingPage.css';
import backgroundImg from '../background.jpg';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      {/* Header Section with Fullscreen Background */}
      <header
        className="text-center py-5 header-section"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          color: 'white',
          height: '100vh', // Full viewport height
        }}
      >
        <div style={{ position: 'relative', zIndex: 2, top: '50%', transform: 'translateY(-50%)' }}>
          <h1 className="display-4">LEVEL UP, EARN CRYPTO.</h1>
          <h2 className="lead">JOIN THE UNDERGROUND</h2>
          <div className="my-4">
            <button className="btn btn-primary btn-lg" onClick={openModal}>
              Subscribe 🚀
            </button>
          </div>
        </div>
        <div className="header-overlay" />
      </header>

      {/* What is GG PlayPass Section */}
      <section className="container text-center my-5 p-4 rounded section-bg" data-aos="fade-up">
        <h2 className="mb-3">What is GG PlayPass?</h2>
        <p className="lead">
          The next-gen gaming token designed for real gamers. Whether you're a casual controller warrior or an underground tournament beast,
          GG lets you earn, compete, and flex — all powered by blockchain.
        </p>
      </section>

      {/* Features Section */}
      <section className="container text-center my-5 p-4 rounded" data-aos="fade-up">
        <h2 className="mb-4">Features</h2>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <div className="card feature-card" data-aos="flip-left">
            <div className="card-body text-center">
              <h5 className="feature-icon">🎮</h5>
              <h5 className="card-title text-white">In-game currency utility</h5>
            </div>
          </div>
          <div className="card feature-card" data-aos="flip-left">
            <div className="card-body text-center">
              <h5 className="feature-icon">💸</h5>
              <h5 className="card-title text-white">Airdrop & staking rewards</h5>
            </div>
          </div>
          <div className="card feature-card" data-aos="flip-left">
            <div className="card-body text-center">
              <h5 className="feature-icon">🏆</h5>
              <h5 className="card-title text-white">Access to GG League tournaments</h5>
            </div>
          </div>
          <div className="card feature-card" data-aos="flip-left">
            <div className="card-body text-center">
              <h5 className="feature-icon">🧬</h5>
              <h5 className="card-title text-white">NFT skin unlocks & leaderboard prizes</h5>
            </div>
          </div>
        </div>
      </section>

      {/* ENTER THE UNDERGROUND ARENA Section */}
      <section className="container text-center my-5 p-4 rounded" data-aos="fade-up">
        <h2 className="mb-3">ENTER THE UNDERGROUND ARENA</h2>
        <p className="lead">
          GG League is a decentralized, skill-based gaming league for true competitors.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <div className="card feature-card" data-aos="flip-right">
            <div className="card-body text-center">
              <h5 className="feature-icon">⚔️</h5>
              <h5 className="card-title text-white">Weekly community tournaments</h5>
            </div>
          </div>
          <div className="card feature-card" data-aos="flip-right">
            <div className="card-body text-center">
              <h5 className="feature-icon">🪙</h5>
              <h5 className="card-title text-white">Token-powered prize pools</h5>
            </div>
          </div>
          <div className="card feature-card" data-aos="flip-right">
            <div className="card-body text-center">
              <h5 className="feature-icon">🕹️</h5>
              <h5 className="card-title text-white">Cross-platform events (PC/Console)</h5>
            </div>
          </div>
          <div className="card feature-card" data-aos="flip-right">
            <div className="card-body text-center">
              <h5 className="feature-icon">📺</h5>
              <h5 className="card-title text-white">Stream-to-earn support</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p>© 2025 GG Playpass. All rights reserved. 🚀</p>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal fade show" style={{ display: 'block' }} onClick={closeModal}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content bg-dark text-light rounded"> {/* Set background to dark */}
              <div className="modal-header border-0 d-flex justify-content-between align-items-start">
                <h5 className="modal-title">🚀 Subscribe to Our Email List</h5>
                <button
                  type="button"
                  className="close text-light"
                  onClick={closeModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    position: 'absolute',
                    right: '1rem',
                    top: '1rem',
                  }}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="mb-3">Stay updated with the latest news and exclusive offers!</p>
                <EmailForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;