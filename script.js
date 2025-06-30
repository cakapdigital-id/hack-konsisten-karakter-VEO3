document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');

    // Pre-fill forms with example data
    document.getElementById('judulScene').value = 'Terminal bus malam';
    document.getElementById('deskripsiKarakter').value = `Seorang vlogger pria muda asal Jawa berusia 29 tahun.
Perawakan/Bentuk Tubuh: tubuh kekar, tinggi 169cm, bentuk badan proporsional.
Warna kulit: sawo matang cerah.
Rambut: ikal, hitam kecokelatan, gaya rambut belah samping formal.
Wajah: wajah oval, alis tebal alami, mata hitam besar, senyum ramah, pipi merona, bibir natural.
Pakaian: mengenakan tshirt hitam bertuliskan 'CAKAP' dan celana panjang jeans robek di lutut, membawa ransel kecil pada punggungnya.`;
    document.getElementById('detailSuara').value = `Dia berbicara dengan suara pria muda yang hangat dan penuh semangat.
Nada: Young Male.
Timbre: bersahabat dan enerjik.
Aksen/Logat: logat Indonesia dengan sentuhan khas Jawa halus, berbicara murni dalam Bahasa Indonesia.
Cara Berbicara: tempo sedang-cepat, gaya bicara lincah dan ekspresif.
PENTING: Seluruh dialog harus dalam Bahasa Indonesia dengan pengucapan natural dan jelas. Pastikan suara karakter ini konsisten di seluruh video.`;
    document.getElementById('aksiKarakter').value = 'berjalan di sekitar terminal bus malam sambil melihat-lihat aktivitas penumpang dan pedagang.';
    document.getElementById('ekspresiKarakter').value = 'Karakter menunjukkan ekspresi kagum dan antusias, sering tersenyum sambil melirik kamera.';
    document.getElementById('latar').value = `latar tempat: di terminal bus antar kota malam hari, terdapat pedagang kaki lima di pinggir jalur keberangkatan, beberapa bus berjajar dengan lampu menyala.
Waktu: malam hari, hujan rintik-rintik.`;
    document.getElementById('cameraMovement').value = 'Tracking Shot / Dolly Shot (Tangkapan Mengikuti)';
    document.getElementById('detailVisualText').value = `Pencahayaan: natural dari lampu jalan dan lampu bus, pantulan cahaya pada aspal basah.
Gaya Video/Art Style: cinematic realistis.
Kualitas Visual: Resolusi 4K.`;
    document.getElementById('suasana').value = 'Suasana sibuk, ramai, dengan kesan perjalanan malam yang hidup dan dinamis meskipun hujan.';
    document.getElementById('suaraLingkungan').value = 'SOUND: suara mesin bus menyala, pengumuman dari pengeras suara, derai hujan ringan, dan percakapan samar antar penumpang dan pedagang.';
    document.getElementById('dialog').value = 'DIALOG dalam Bahasa Indonesia: Karakter berkata: "Tiap kota punya terminal kayak gini, dan aku suka banget suasana malamnya… hangat walau gerimis begini. Rasanya Udin Petot."';
    document.getElementById('negativePrompt').value = 'Hindari: teks di layar, subtitle, tulisan di video, font, logo, distorsi, artefak, anomali, wajah ganda, anggota badan cacat, tangan tidak normal, orang tambahan, objek mengganggu, kualitas rendah, buram, glitch, suara robotik, suara pecah.';


    generateBtn.addEventListener('click', function () {
        // Get all values from the form
        const judulScene = document.getElementById('judulScene').value;
        const deskripsiKarakter = document.getElementById('deskripsiKarakter').value;
        const detailSuara = document.getElementById('detailSuara').value;
        const aksiKarakter = document.getElementById('aksiKarakter').value;
        const ekspresiKarakter = document.getElementById('ekspresiKarakter').value;
        const latar = document.getElementById('latar').value;
        const cameraMovement = document.getElementById('cameraMovement').value;
        const detailVisualText = document.getElementById('detailVisualText').value;
        const suasana = document.getElementById('suasana').value;
        const suaraLingkungan = document.getElementById('suaraLingkungan').value;
        const dialog = document.getElementById('dialog').value;
        const negativePrompt = document.getElementById('negativePrompt').value;

        // --- Generate Indonesian Prompt ---
        let promptID = `**Judul Scene:** ${judulScene}\n\n`;
        promptID += `**Deskripsi Karakter Inti:**\n${deskripsiKarakter}\n\n`;
        promptID += `**Detail Suara Karakter:**\n${detailSuara}\n\n`;
        promptID += `**Aksi Karakter:**\n${aksiKarakter}\n\n`;
        promptID += `**Ekspresi Karakter:**\n${ekspresiKarakter}\n\n`;
        promptID += `**Latar Tempat & Waktu:**\n${latar}\n\n`;
        promptID += `**Detail Visual Tambahan:**\nGerakan Kamera: ${cameraMovement}\n${detailVisualText}\n\n`;
        promptID += `**Suasana Keseluruhan:**\n${suasana}\n\n`;
        promptID += `**Suara Lingkungan/Ambience:**\n${suaraLingkungan}\n\n`;
        promptID += `**Dialog Karakter:**\n${dialog}\n\n`;
        promptID += `**Negative Prompt:**\n${negativePrompt}`;

        document.getElementById('outputIndonesia').value = promptID;

        // --- Generate English Prompt with Translation ---
        // Note: This is a basic dictionary for translation. For dynamic, real-world use, a translation API is recommended.
        const dictionary = {
            'Terminal bus malam': 'Night bus terminal',
            // Character Description
            'Seorang vlogger pria muda asal Jawa berusia 29 tahun': 'A 29-year-old young male vlogger from Java',
            'Perawakan/Bentuk Tubuh:': 'Physique/Body Shape:',
            'tubuh kekar, tinggi 169cm, bentuk badan proporsional': 'sturdy body, 169cm tall, proportional body shape',
            'Warna kulit:': 'Skin color:',
            'sawo matang cerah': 'bright tan',
            'Rambut:': 'Hair:',
            'ikal, hitam kecokelatan, gaya rambut belah samping formal': 'curly, brownish-black, formal side-part hairstyle',
            'Wajah:': 'Face:',
            'wajah oval, alis tebal alami, mata hitam besar, senyum ramah, pipi merona, bibir natural': 'oval face, natural thick eyebrows, large black eyes, friendly smile, rosy cheeks, natural lips',
            'Pakaian:': 'Clothing:',
            "mengenakan tshirt hitam bertuliskan 'CAKAP' dan celana panjang jeans robek di lutut, membawa ransel kecil pada punggungnya": "wearing a black t-shirt with the word 'CAKAP' and long jeans torn at the knee, carrying a small backpack on his back",
            // Voice Details
            'Dia berbicara dengan suara pria muda yang hangat dan penuh semangat': 'He speaks with the warm and enthusiastic voice of a young man',
            'Nada:': 'Tone:',
            'Timbre:': 'Timbre:',
            'bersahabat dan enerjik': 'friendly and energetic',
            'Aksen/Logat:': 'Accent/Dialect:',
            'logat Indonesia dengan sentuhan khas Jawa halus, berbicara murni dalam Bahasa Indonesia': 'Indonesian accent with a smooth Javanese touch, speaks purely in Indonesian',
            'Cara Berbicara:': 'Manner of Speaking:',
            'tempo sedang-cepat, gaya bicara lincah dan ekspresif': 'medium-to-fast tempo, lively and expressive style',
            'PENTING:': 'IMPORTANT:',
            'Seluruh dialog harus dalam Bahasa Indonesia dengan pengucapan natural dan jelas. Pastikan suara karakter ini konsisten di seluruh video': 'All dialogue must be in Indonesian with natural and clear pronunciation. Ensure this character\'s voice is consistent throughout the video',
            // Action & Expression
            'berjalan di sekitar terminal bus malam sambil melihat-lihat aktivitas penumpang dan pedagang': 'walking around the night bus terminal while looking at the activities of passengers and vendors',
            'Karakter menunjukkan ekspresi kagum dan antusias, sering tersenyum sambil melirik kamera': 'The character shows an expression of awe and enthusiasm, often smiling while glancing at the camera',
            // Setting
            'latar tempat:': 'Setting:',
            'di terminal bus antar kota malam hari, terdapat pedagang kaki lima di pinggir jalur keberangkatan, beberapa bus berjajar dengan lampu menyala': 'at an intercity bus terminal at night, there are street vendors on the edge of the departure lane, several buses are lined up with their lights on',
            'Waktu:': 'Time:',
            'malam hari, hujan rintik-rintik': 'night, light drizzle',
            // Visuals
            'Pencahayaan:': 'Lighting:',
            'natural dari lampu jalan dan lampu bus, pantulan cahaya pada aspal basah': 'natural from street lights and bus lights, light reflection on wet asphalt',
            'Gaya Video/Art Style:': 'Video/Art Style:',
            'cinematic realistis': 'cinematic realistic',
            'Kualitas Visual:': 'Visual Quality:',
            'Resolusi 4K': '4K Resolution',
            // Atmosphere & Sound
            'Suasana sibuk, ramai, dengan kesan perjalanan malam yang hidup dan dinamis meskipun hujan': 'A busy, crowded atmosphere, with the impression of a lively and dynamic night journey despite the rain',
            'suara mesin bus menyala, pengumuman dari pengeras suara, derai hujan ringan, dan percakapan samar antar penumpang dan pedagang': 'sound of bus engines starting, announcements from loudspeakers, light rain patter, and faint conversations between passengers and vendors',
            // Negative Prompt
            'Hindari:': 'Avoid:',
            'teks di layar': 'on-screen text',
            'tulisan di video': 'text in video',
            'wajah ganda': 'double faces',
            'anggota badan cacat': 'deformed limbs',
            'tangan tidak normal': 'abnormal hands',
            'orang tambahan': 'extra people',
            'objek mengganggu': 'distracting objects',
            'kualitas rendah': 'low quality',
            'buram': 'blurry',
            'suara robotik': 'robotic voice',
            'suara pecah': 'broken voice',
            'subtitle': 'subtitle',
            'font': 'font',
            'logo': 'logo',
            'distorsi': 'distortion',
            'artefak': 'artifacts',
            'anomali': 'anomalies',
            'glitch': 'glitch'
        };

        function translate(text, dict) {
            let translated = text;
            for (const [key, value] of Object.entries(dict)) {
                const regex = new RegExp(key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
                translated = translated.replace(regex, value);
            }
            return translated;
        }

        // Translate the values
        const judulScene_en = translate(judulScene, dictionary);
        const deskripsiKarakter_en = translate(deskripsiKarakter, dictionary);
        const detailSuara_en = translate(detailSuara, dictionary);
        const aksiKarakter_en = translate(aksiKarakter, dictionary);
        const ekspresiKarakter_en = translate(ekspresiKarakter, dictionary);
        const latar_en = translate(latar, dictionary);
        const detailVisualText_en = translate(detailVisualText, dictionary);
        const suasana_en = translate(suasana, dictionary);
        const negativePrompt_en = translate(negativePrompt, dictionary);

        let suaraLingkungan_en = suaraLingkungan;
        if (suaraLingkungan.toUpperCase().startsWith('SOUND:')) {
            const content = suaraLingkungan.substring(6);
            suaraLingkungan_en = 'SOUND:' + translate(content, dictionary);
        } else {
            suaraLingkungan_en = translate(suaraLingkungan, dictionary);
        }

        let promptEN = `**Scene Title:** ${judulScene_en}\n\n`;
        promptEN += `**Core Character Description:**\n${deskripsiKarakter_en}\n\n`;
        promptEN += `**Character Voice Details:**\n${detailSuara_en}\n\n`;
        promptEN += `**Character Action:**\n${aksiKarakter_en}\n\n`;
        promptEN += `**Character Expression:**\n${ekspresiKarakter_en}\n\n`;
        promptEN += `**Setting & Time:**\n${latar_en}\n\n`;

        const cameraMovementEN = cameraMovement.split(' (')[0];
        promptEN += `**Additional Visual Details:**\nCamera Movement: ${cameraMovementEN}\n${detailVisualText_en}\n\n`;

        promptEN += `**Overall Atmosphere:**\n${suasana_en}\n\n`;
        promptEN += `**Environmental Sound/Ambience:**\n${suaraLingkungan_en}\n\n`;

        const dialogEN = dialog.replace("DIALOG dalam Bahasa Indonesia:", "DIALOGUE in Indonesian:");
        promptEN += `**Character Dialogue:**\n${dialogEN}\n\n`;

        promptEN += `**Negative Prompt:**\n${negativePrompt_en}`;

        document.getElementById('outputEnglish').value = promptEN;
    });
});
