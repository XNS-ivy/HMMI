<template>
  <div id="app">
    <header>
      <img src="../assets/vue.svg" alt="Logo HMMI" class="logo" />
      <h1 class="glow">Himpunan Mahasiswa Manajemen Informatika</h1>
      <h2 class="glow">UNSIQ (Universitas Sains Al-Qur'an)</h2>
    </header>

    <main>
      <section class="about">
        <h3 class="glow">Tentang HMMI</h3>
        <p class="glow-text">
          HMMI UNSIQ adalah organisasi mahasiswa yang menaungi mahasiswa 
          Program Studi Manajemen Informatika di Universitas Sains Al-Qur'an. 
          HMMI berperan dalam pengembangan keilmuan, kreativitas, dan soft skill 
          mahasiswa di bidang teknologi dan manajemen informasi.
        </p>
      </section>

      <section class="mission">
        <h3 class="glow">Visi & Misi</h3>
        <ul>
          <li class="glow-text">Mengembangkan kemampuan mahasiswa dalam bidang teknologi informasi.</li>
          <li class="glow-text">Menyediakan wadah bagi mahasiswa untuk berkreasi dan berinovasi.</li>
          <li class="glow-text">Menjalin hubungan baik dengan civitas akademika dan industri.</li>
          <li class="glow-text">Menanamkan nilai-nilai akademik, sosial, dan profesionalisme.</li>
        </ul>
      </section>

      <section class="contact">
        <h3 class="glow">Kontak & Media Sosial</h3>
        <p class="glow-text">Ikuti kami untuk update terbaru!</p>
        <div class="social-links">
          <a href="https://instagram.com/hmmi_unsiq" target="_blank" class="social-btn glow-text">
            Instagram
          </a>
          <a href="https://facebook.com/hmmi_unsiq" target="_blank" class="social-btn glow-text">
            Facebook
          </a>
          <a href="mailto:contact@hmmiunsiq.ac.id" class="social-btn glow-text">
            Email
          </a>
        </div>
      </section>
    </main>

    <footer>
      <p class="glow-text">&copy; 2025 HMMI UNSIQ - All Rights Reserved.</p>
    </footer>
  </div>
</template>

<style>
#app {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

header {
  margin-bottom: 20px;
}

.logo {
  width: 120px;
  height: auto;
  margin-bottom: 10px;
}

h1, h2, h3 {
  transition: text-shadow 0.3s ease-in-out;
}

h1 {
  font-size: 2em;
  margin: 0;
  color: #9200fa;
}

h2 {
  font-size: 1.5em;
  color: #ffffff;
}

h3 {
  color: #9200fb;
}

p, li {
  color: #ffffff;
}

/* Efek Hover */
.glow:hover {
  text-shadow: 0 0 10px #c793ff, 0 0 20px #d4a5ff;
}

.glow-text:hover {
  text-shadow: 0 0 5px #ffffff, 0 0 10px #d4a5ff;
}

ul {
  text-align: left;
  margin: 0 auto;
  max-width: 600px;
  padding-left: 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.social-btn {
  display: inline-block;
  padding: 10px 15px;
  background-color: purple;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s, text-shadow 0.3s;
}

.social-btn:hover {
  background-color: #6a0dad;
  text-shadow: 0 0 5px #ffffff, 0 0 10px #d4a5ff;
}

footer {
  margin-top: 20px;
  font-size: 0.9em;
  color: #666;
}
</style>