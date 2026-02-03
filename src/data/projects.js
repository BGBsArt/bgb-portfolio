export const projects = [
        {
        title: "Doublage Vidéo Automatique (Français → Yoruba)",
        tagline: "RECHERCHE & IA & ML OPS",
        taglineClass: "text-warning",
        description: "Pipeline Deep Learning complet : Extraction, ASR (Whisper), Traduction NLLB, Validation Humaine (Interface Web) et Lip-Sync (Wav2Lip).",
        technologies: ["Python", "PyTorch", "Wav2Lip", "FFmpeg"],
        image: "/images/projects/doublage-ia.png", 
        link: "#",
        hasPdf: false,
        // On ajoute le schéma ici
        architecture: `
┌─────────────────────────────────────────────────────────────────────────────┐
│                         ARCHITECTURE PIPELINE V2                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│     ┌─────────────────────────────────────────────────────────────────┐     │
│     │                        VIDÉO INPUT (FR)                         │     │
│     │                      (MP4, max 5 min)                           │     │
│     └──────────────────────────┬──────────────────────────────────────┘     │
│                                │                                            │
│                                ▼                                            │
│     ┌─────────────────────────────────────────────────────────────────┐     │
│     │  MODULE 1 : EXTRACTION (FFmpeg)                                 │     │
│     │  Audio (WAV)  +  Frames Visage  +  Vidéo sans son               │     │
│     └───────────┼────────────────────┼────────────────────┼──────────┘      │
│                 │                    │                    │                 │
│                 ▼                    │                    │                 │
│     ┌─────────────────────────────┐  │                    │                 │
│     │  MODULE 2 : ASR             │  │                    │                 │
│     │  Whisper large-v3           │  │                    │                 │
│     └──────────────┬──────────────┘  │                    │                 │
│                    ▼                 │                    │                 │
│     ┌─────────────────────────────┐  │                    │                 │
│     │  MODULE 3 : TRADUCTION      │  │                    │                 │
│     │  NLLB-200 (Fine-tuned)      │  │                    │                 │
│     └──────────────┬──────────────┘  │                    │                 │
│                    ▼                 │                    │                 │
│     ┌─────────────────────────────────────────────────────┐                 │
│     │  MODULE HITL : VALIDATION HUMAINE                   │                 │
│     │  Interface Web pour correction manuelle FR->Yoruba  │                 │
│     └──────────────┬──────────────────────────────────────┘                 │
│                    ▼                                                        │
│     ┌─────────────────────────────┐                                         │
│     │  MODULE 4 : TTS YORUBA      │                                         │
│     │  (VITS / XTTS-v2)           │                                         │
│     └──────────────┬──────────────┘                                         │
│                    │                    │                                   │
│                    ▼                    ▼                                   │
│     ┌─────────────────────────────────────────────────────────────────┐     │
│     │  MODULE 5 : LIP-SYNC (Wav2Lip-GAN)                              │     │
│     │  Syncronisation labiale sur l'audio Yoruba                      │     │
│     └──────────────────────────┬──────────────────────────────────────┘     │
│                                │                                            │
│                                ▼                                            │
│     ┌─────────────────────────────────────────────────────────────────┐     │
│     │  MODULE 6 : FUSION FINALE (FFmpeg)                              │     │
│     │                     OUTPUT MP4                                  │     │
│     └─────────────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────────┘
        `
    },
        {
        title: "Kit Tailleur Pro (Offline-First)",
        tagline: "HARDWARE & MOBILE",
        taglineClass: "text-primary",
        // J'ai mis à jour la description pour être précis
        description: "Solution 'Kit en main' pour artisans. Architecture Offline-first haute performance avec Isar (NoSQL). Synchronisation différentielle Cloud/Local dès connexion. Zéro latence.",
        // On remplace SQLite par Isar
        technologies: ["Flutter", "Isar (NoSQL)", "Cloud Sync", "Hardware"],
        image: "/images/projects/kit-tailleur.png",
        link: "#",
        hasPdf: false
    },
    {
        title: "Suite EdTech (Scolaire & Universitaire)",
        tagline: "SAAS & CLOUD ARCHITECTURE",
        taglineClass: "text-success",
        description: "Conception de deux écosystèmes ERP distincts : 'OpenLabSchool' (Gestion Scolaire/Bulletins) et 'ProposeCampus' (Gestion Universitaire/LMD). Déploiement CI/CD automatisé sur Render.",
        technologies: ["Django", "PostgreSQL", "Render (Cloud)", "Docker"], 
        image: "/images/projects/proposecampus.png", 
        link: "#",
        pdfLink: "/images/projects/proposecampus-presentation.pdf",
        hasPdf: true
    }
];