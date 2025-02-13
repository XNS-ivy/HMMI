<template>
  <div id="app">
    <header>
      <img src="../assets/vue.svg" alt="Logo HMMI" class="logo" />
      <h1>Himpunan Mahasiswa Manajemen Informatika</h1>
      <h2>UNSIQ (Universitas Sains Al-Qur'an)</h2>
    </header>

    <main>
      <section class="about">
        <h3>Tentang HMMI</h3>
        <p>
          HMMI UNSIQ adalah organisasi mahasiswa yang menaungi mahasiswa 
          Program Studi Manajemen Informatika di Universitas Sains Al-Qur'an. 
          HMMI berperan dalam pengembangan keilmuan, kreativitas, dan soft skill 
          mahasiswa di bidang teknologi dan manajemen informasi.
        </p>
      </section>

      <section class="mission">
        <h3>Visi & Misi</h3>
        <ul>
          <li>Mengembangkan kemampuan mahasiswa dalam bidang teknologi informasi.</li>
          <li>Menyediakan wadah bagi mahasiswa untuk berkreasi dan berinovasi.</li>
          <li>Menjalin hubungan baik dengan civitas akademika dan industri.</li>
          <li>Menanamkan nilai-nilai akademik, sosial, dan profesionalisme.</li>
        </ul>
      </section>

      <section class="contact">
        <h3>Kontak & Media Sosial</h3>
        <p>Ikuti kami untuk update terbaru!</p>
        <div class="social-links">
          <a href="https://instagram.com/hmmi_unsiq" target="_blank" class="social-btn">
            Instagram
          </a>
          <a href="https://facebook.com/hmmi_unsiq" target="_blank" class="social-btn">
            Facebook
          </a>
          <a href="mailto:contact@hmmiunsiq.ac.id" class="social-btn">
            Email
          </a>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 HMMI UNSIQ - All Rights Reserved.</p>
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

h1 {
  font-size: 2em;
  margin: 0;
  color: #4b0082;
}

h2 {
  font-size: 1.5em;
  color: #ffffff;
}

h3 {
  color: #4b0082;
}

p {
  color: #ffffff;
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
  transition: background 0.3s;
}

.social-btn:hover {
  background-color: #6a0dad;
}

footer {
  margin-top: 20px;
  font-size: 0.9em;
  color: #666;
}
</style>