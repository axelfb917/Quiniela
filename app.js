const TEAM_LOGOS = {
    "México": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/north-america/mex.png",
    "Sudáfrica": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/africa/rsa.png",
    "Corea del Sur": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/asia/kor.png",
    "Chequia": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/cze.png",
    "Canadá": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/north-america/can.png",
    "Bosnia y Herzegovina": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/bih.png",
    "Catar": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/middle-east/qat.png",
    "Suiza": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/sui.png",
    "Brasil": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/south-america/bra.png",
    "Marruecos": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/africa/mar.png",
    "Escocia": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/sco.png",
    "Haití": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/caribbean/hai.png",
    "Estados Unidos": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/north-america/usa.png",
    "Turquía": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/tur.png",
    "Australia": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/pacific/aus.png",
    "Paraguay": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/south-america/par.png",
    "Alemania": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/ger.png",
    "Ecuador": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/south-america/ecu.png",
    "Costa de Marfil": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/africa/civ.png",
    "Curazao": "https://assets.football-logos.cc/logos/curacao/256x256/curacao-national-team.4b718c25.png",
    "Países Bajos": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/ned.png",
    "Japón": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/asia/jpn.png",
    "Suecia": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/swe.png",
    "Túnez": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/africa/tun.png",
    "Bélgica": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/bel.png",
    "Egipto": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/africa/egy.png",
    "Irán": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/middle-east/irn.png",
    "Nueva Zelanda": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/pacific/nzl.png",
    "España": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/esp.png",
    "Uruguay": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/south-america/uru.png",
    "Cabo Verde": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/africa/cpv.png",
    "Arabia Saudita": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/middle-east/ksa.png",
    "Francia": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/fra.png",
    "Senegal": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/africa/sen.png",
    "Noruega": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/nor.png",
    "Irak": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/middle-east/irq.png",
    "Argentina": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/south-america/arg.png",
    "Austria": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/aut.png",
    "Argelia": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/africa/alg.png",
    "Jordania": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/middle-east/jor.png",
    "Portugal": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/por.png",
    "Colombia": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/south-america/col.png",
    "RD Congo": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/africa/cod.png",
    "Uzbekistán": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/asia/uzb.png",
    "Inglaterra": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/eng.png",
    "Croacia": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/europe/cro.png",
    "Ghana": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/africa/gha.png",
    "Panamá": "https://raw.githubusercontent.com/sportlogos/sport.db.logos/master/central-america/pan.png"
};

// Datos iniciales de partidos de la Fase de Grupos (Mundial 2026)
const DEFAULT_MATCHES = [
    // Grupo A
    { id: 'A1', group: 'A', team1: 'México', emoji1: '🇲🇽', team2: 'Sudáfrica', emoji2: '🇿🇦', date: '11 de junio', time: '13:00' },
    { id: 'A2', group: 'A', team1: 'Corea del Sur', emoji1: '🇰🇷', team2: 'Chequia', emoji2: '🇨🇿', date: '11 de junio', time: '20:00' },
    { id: 'A3', group: 'A', team1: 'México', emoji1: '🇲🇽', team2: 'Corea del Sur', emoji2: '🇰🇷', date: '18 de junio', time: '19:00' },
    { id: 'A4', group: 'A', team1: 'Sudáfrica', emoji1: '🇿🇦', team2: 'Chequia', emoji2: '🇨🇿', date: '18 de junio', time: '10:00' },
    { id: 'A5', group: 'A', team1: 'México', emoji1: '🇲🇽', team2: 'Chequia', emoji2: '🇨🇿', date: '24 de junio', time: '19:00' },
    { id: 'A6', group: 'A', team1: 'Sudáfrica', emoji1: '🇿🇦', team2: 'Corea del Sur', emoji2: '🇰🇷', date: '24 de junio', time: '19:00' },
    // Grupo B
    { id: 'B1', group: 'B', team1: 'Canadá', emoji1: '🇨🇦', team2: 'Bosnia y Herzegovina', emoji2: '🇧🇦', date: '12 de junio', time: '13:00' },
    { id: 'B2', group: 'B', team1: 'Catar', emoji1: '🇶🇦', team2: 'Suiza', emoji2: '🇨🇭', date: '13 de junio', time: '13:00' },
    { id: 'B3', group: 'B', team1: 'Canadá', emoji1: '🇨🇦', team2: 'Catar', emoji2: '🇶🇦', date: '18 de junio', time: '16:00' },
    { id: 'B4', group: 'B', team1: 'Bosnia y Herzegovina', emoji1: '🇧🇦', team2: 'Suiza', emoji2: '🇨🇭', date: '18 de junio', time: '13:00' },
    { id: 'B5', group: 'B', team1: 'Canadá', emoji1: '🇨🇦', team2: 'Suiza', emoji2: '🇨🇭', date: '24 de junio', time: '13:00' },
    { id: 'B6', group: 'B', team1: 'Bosnia y Herzegovina', emoji1: '🇧🇦', team2: 'Catar', emoji2: '🇶🇦', date: '24 de junio', time: '13:00' },
    // Grupo C
    { id: 'C1', group: 'C', team1: 'Brasil', emoji1: '🇧🇷', team2: 'Marruecos', emoji2: '🇲🇦', date: '13 de junio', time: '16:00' },
    { id: 'C2', group: 'C', team1: 'Haití', emoji1: '🇭🇹', team2: 'Escocia', emoji2: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', date: '13 de junio', time: '19:00' },
    { id: 'C3', group: 'C', team1: 'Brasil', emoji1: '🇧🇷', team2: 'Haití', emoji2: '🇭🇹', date: '19 de junio', time: '18:30' },
    { id: 'C4', group: 'C', team1: 'Marruecos', emoji1: '🇲🇦', team2: 'Escocia', emoji2: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', date: '19 de junio', time: '16:00' },
    { id: 'C5', group: 'C', team1: 'Brasil', emoji1: '🇧🇷', team2: 'Escocia', emoji2: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', date: '24 de junio', time: '16:00' },
    { id: 'C6', group: 'C', team1: 'Marruecos', emoji1: '🇲🇦', team2: 'Haití', emoji2: '🇭🇹', date: '24 de junio', time: '16:00' },
    // Grupo D
    { id: 'D1', group: 'D', team1: 'Estados Unidos', emoji1: '🇺🇸', team2: 'Paraguay', emoji2: '🇵🇾', date: '12 de junio', time: '19:00' },
    { id: 'D2', group: 'D', team1: 'Australia', emoji1: '🇦🇺', team2: 'Turquía', emoji2: '🇹🇷', date: '13 de junio', time: '22:00' },
    { id: 'D3', group: 'D', team1: 'Estados Unidos', emoji1: '🇺🇸', team2: 'Australia', emoji2: '🇦🇺', date: '19 de junio', time: '13:00' },
    { id: 'D4', group: 'D', team1: 'Paraguay', emoji1: '🇵🇾', team2: 'Turquía', emoji2: '🇹🇷', date: '19 de junio', time: '21:00' },
    { id: 'D5', group: 'D', team1: 'Estados Unidos', emoji1: '🇺🇸', team2: 'Turquía', emoji2: '🇹🇷', date: '25 de junio', time: '20:00' },
    { id: 'D6', group: 'D', team1: 'Paraguay', emoji1: '🇵🇾', team2: 'Australia', emoji2: '🇦🇺', date: '25 de junio', time: '20:00' },
    // Grupo E
    { id: 'E1', group: 'E', team1: 'Alemania', emoji1: '🇩🇪', team2: 'Curazao', emoji2: '🇨🇼', date: '14 de junio', time: '11:00' },
    { id: 'E2', group: 'E', team1: 'Costa de Marfil', emoji1: '🇨🇮', team2: 'Ecuador', emoji2: '🇪🇨', date: '14 de junio', time: '17:00' },
    { id: 'E3', group: 'E', team1: 'Alemania', emoji1: '🇩🇪', team2: 'Costa de Marfil', emoji2: '🇨🇮', date: '20 de junio', time: '14:00' },
    { id: 'E4', group: 'E', team1: 'Curazao', emoji1: '🇨🇼', team2: 'Ecuador', emoji2: '🇪🇨', date: '20 de junio', time: '18:00' },
    { id: 'E5', group: 'E', team1: 'Alemania', emoji1: '🇩🇪', team2: 'Ecuador', emoji2: '🇪🇨', date: '25 de junio', time: '14:00' },
    { id: 'E6', group: 'E', team1: 'Curazao', emoji1: '🇨🇼', team2: 'Costa de Marfil', emoji2: '🇨🇮', date: '25 de junio', time: '14:00' },
    // Grupo F
    { id: 'F1', group: 'F', team1: 'Países Bajos', emoji1: '🇳🇱', team2: 'Japón', emoji2: '🇯🇵', date: '14 de junio', time: '14:00' },
    { id: 'F2', group: 'F', team1: 'Suecia', emoji1: '🇸🇪', team2: 'Túnez', emoji2: '🇹🇳', date: '14 de junio', time: '20:00' },
    { id: 'F3', group: 'F', team1: 'Países Bajos', emoji1: '🇳🇱', team2: 'Suecia', emoji2: '🇸🇪', date: '20 de junio', time: '11:00' },
    { id: 'F4', group: 'F', team1: 'Japón', emoji1: '🇯🇵', team2: 'Túnez', emoji2: '🇹🇳', date: '20 de junio', time: '22:00' },
    { id: 'F5', group: 'F', team1: 'Países Bajos', emoji1: '🇳🇱', team2: 'Túnez', emoji2: '🇹🇳', date: '25 de junio', time: '17:00' },
    { id: 'F6', group: 'F', team1: 'Japón', emoji1: '🇯🇵', team2: 'Suecia', emoji2: '🇸🇪', date: '25 de junio', time: '17:00' },
    // Grupo G
    { id: 'G1', group: 'G', team1: 'Bélgica', emoji1: '🇧🇪', team2: 'Egipto', emoji2: '🇪🇬', date: '15 de junio', time: '13:00' },
    { id: 'G2', group: 'G', team1: 'Irán', emoji1: '🇮🇷', team2: 'Nueva Zelanda', emoji2: '🇳🇿', date: '15 de junio', time: '19:00' },
    { id: 'G3', group: 'G', team1: 'Bélgica', emoji1: '🇧🇪', team2: 'Irán', emoji2: '🇮🇷', date: '21 de junio', time: '13:00' },
    { id: 'G4', group: 'G', team1: 'Egipto', emoji1: '🇪🇬', team2: 'Nueva Zelanda', emoji2: '🇳🇿', date: '21 de junio', time: '19:00' },
    { id: 'G5', group: 'G', team1: 'Bélgica', emoji1: '🇧🇪', team2: 'Nueva Zelanda', emoji2: '🇳🇿', date: '26 de junio', time: '21:00' },
    { id: 'G6', group: 'G', team1: 'Egipto', emoji1: '🇪🇬', team2: 'Irán', emoji2: '🇮🇷', date: '26 de junio', time: '21:00' },
    // Grupo H
    { id: 'H1', group: 'H', team1: 'España', emoji1: '🇪🇸', team2: 'Cabo Verde', emoji2: '🇨🇻', date: '15 de junio', time: '10:00' },
    { id: 'H2', group: 'H', team1: 'Arabia Saudita', emoji1: '🇸🇦', team2: 'Uruguay', emoji2: '🇺🇾', date: '15 de junio', time: '16:00' },
    { id: 'H3', group: 'H', team1: 'España', emoji1: '🇪🇸', team2: 'Arabia Saudita', emoji2: '🇸🇦', date: '21 de junio', time: '10:00' },
    { id: 'H4', group: 'H', team1: 'Cabo Verde', emoji1: '🇨🇻', team2: 'Uruguay', emoji2: '🇺🇾', date: '21 de junio', time: '16:00' },
    { id: 'H5', group: 'H', team1: 'España', emoji1: '🇪🇸', team2: 'Uruguay', emoji2: '🇺🇾', date: '26 de junio', time: '18:00' },
    { id: 'H6', group: 'H', team1: 'Cabo Verde', emoji1: '🇨🇻', team2: 'Arabia Saudita', emoji2: '🇸🇦', date: '26 de junio', time: '18:00' },
    // Grupo I
    { id: 'I1', group: 'I', team1: 'Francia', emoji1: '🇫🇷', team2: 'Senegal', emoji2: '🇸🇳', date: '16 de junio', time: '13:00' },
    { id: 'I2', group: 'I', team1: 'Irak', emoji1: '🇮🇶', team2: 'Noruega', emoji2: '🇳🇴', date: '16 de junio', time: '16:00' },
    { id: 'I3', group: 'I', team1: 'Francia', emoji1: '🇫🇷', team2: 'Irak', emoji2: '🇮🇶', date: '22 de junio', time: '15:00' },
    { id: 'I4', group: 'I', team1: 'Senegal', emoji1: '🇸🇳', team2: 'Noruega', emoji2: '🇳🇴', date: '22 de junio', time: '18:00' },
    { id: 'I5', group: 'I', team1: 'Francia', emoji1: '🇫🇷', team2: 'Noruega', emoji2: '🇳🇴', date: '26 de junio', time: '13:00' },
    { id: 'I6', group: 'I', team1: 'Senegal', emoji1: '🇸🇳', team2: 'Irak', emoji2: '🇮🇶', date: '26 de junio', time: '13:00' },
    // Grupo J
    { id: 'J1', group: 'J', team1: 'Argentina', emoji1: '🇦🇷', team2: 'Argelia', emoji2: '🇩🇿', date: '16 de junio', time: '19:00' },
    { id: 'J2', group: 'J', team1: 'Austria', emoji1: '🇦🇹', team2: 'Jordania', emoji2: '🇯🇴', date: '16 de junio', time: '22:00' },
    { id: 'J3', group: 'J', team1: 'Argentina', emoji1: '🇦🇷', team2: 'Austria', emoji2: '🇦🇹', date: '22 de junio', time: '11:00' },
    { id: 'J4', group: 'J', team1: 'Argelia', emoji1: '🇩🇿', team2: 'Jordania', emoji2: '🇯🇴', date: '22 de junio', time: '21:00' },
    { id: 'J5', group: 'J', team1: 'Argentina', emoji1: '🇦🇷', team2: 'Jordania', emoji2: '🇯🇴', date: '27 de junio', time: '20:00' },
    { id: 'J6', group: 'J', team1: 'Argelia', emoji1: '🇩🇿', team2: 'Austria', emoji2: '🇦🇹', date: '27 de junio', time: '20:00' },
    // Grupo K
    { id: 'K1', group: 'K', team1: 'Portugal', emoji1: '🇵🇹', team2: 'RD Congo', emoji2: '🇨🇩', date: '17 de junio', time: '11:00' },
    { id: 'K2', group: 'K', team1: 'Uzbekistán', emoji1: '🇺🇿', team2: 'Colombia', emoji2: '🇨🇴', date: '17 de junio', time: '20:00' },
    { id: 'K3', group: 'K', team1: 'Portugal', emoji1: '🇵🇹', team2: 'Uzbekistán', emoji2: '🇺🇿', date: '23 de junio', time: '11:00' },
    { id: 'K4', group: 'K', team1: 'RD Congo', emoji1: '🇨🇩', team2: 'Colombia', emoji2: '🇨🇴', date: '23 de junio', time: '20:00' },
    { id: 'K5', group: 'K', team1: 'Portugal', emoji1: '🇵🇹', team2: 'Colombia', emoji2: '🇨🇴', date: '27 de junio', time: '17:30' },
    { id: 'K6', group: 'K', team1: 'RD Congo', emoji1: '🇨🇩', team2: 'Uzbekistán', emoji2: '🇺🇿', date: '27 de junio', time: '17:30' },
    // Grupo L
    { id: 'L1', group: 'L', team1: 'Inglaterra', emoji1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', team2: 'Croacia', emoji2: '🇭🇷', date: '17 de junio', time: '14:00' },
    { id: 'L2', group: 'L', team1: 'Ghana', emoji1: '🇬🇭', team2: 'Panamá', emoji2: '🇵🇦', date: '17 de junio', time: '17:00' },
    { id: 'L3', group: 'L', team1: 'Inglaterra', emoji1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', team2: 'Ghana', emoji2: '🇬🇭', date: '23 de junio', time: '14:00' },
    { id: 'L4', group: 'L', team1: 'Croacia', emoji1: '🇭🇷', team2: 'Panamá', emoji2: '🇵🇦', date: '23 de junio', time: '17:00' },
    { id: 'L5', group: 'L', team1: 'Inglaterra', emoji1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', team2: 'Panamá', emoji2: '🇵🇦', date: '27 de junio', time: '15:00' },
    { id: 'L6', group: 'L', team1: 'Croacia', emoji1: '🇭🇷', team2: 'Ghana', emoji2: '🇬🇭', date: '27 de junio', time: '15:00' }
];

// Estructura de Fase Final (Definición de llaves)
const KNOCKOUT_MATCHES = {
    r32: [
        { id: 'R32_1', label: 'Los Ángeles', team1: 'Sudáfrica', team2: 'Canadá', emoji1: '🇿🇦', emoji2: '🇨🇦', date: '28', time: '13:00' },
        { id: 'R32_2', label: 'Houston', team1: 'Brasil', team2: 'Japón', emoji1: '🇧🇷', emoji2: '🇯🇵', date: '29', time: '11:00' },
        { id: 'R32_3', label: 'Boston', team1: 'Alemania', team2: 'Paraguay', emoji1: '🇩🇪', emoji2: '🇵🇾', date: '29', time: '14:30' },
        { id: 'R32_4', label: 'Monterrey', team1: 'Países Bajos', team2: 'Marruecos', emoji1: '🇳🇱', emoji2: '🇲🇦', date: '29', time: '19:00' },
        { id: 'R32_5', label: 'Dallas', team1: 'Costa de Marfil', team2: 'Noruega', emoji1: '🇨🇮', emoji2: '🇳🇴', date: '30', time: '11:00' },
        { id: 'R32_6', label: 'Nueva York/Nueva Jersey', team1: 'Francia', team2: 'Suecia', emoji1: '🇫🇷', emoji2: '🇸🇪', date: '30', time: '15:00' },
        { id: 'R32_7', label: 'Ciudad de México', team1: 'México', team2: 'Ecuador', emoji1: '🇲🇽', emoji2: '🇪🇨', date: '30', time: '19:00' },
        { id: 'R32_8', label: 'Atlanta', team1: 'Inglaterra', team2: 'RD Congo', emoji1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', emoji2: '🇨🇩', date: '1', time: '10:00' },
        { id: 'R32_9', label: 'Seattle', team1: 'Bélgica', team2: 'Senegal', emoji1: '🇧🇪', emoji2: '🇸🇳', date: '1', time: '14:00' },
        { id: 'R32_10', label: 'San Francisco', team1: 'Estados Unidos', team2: 'Bosnia y Herzegovina', emoji1: '🇺🇸', emoji2: '🇧🇦', date: '1', time: '18:00' },
        { id: 'R32_11', label: 'Los Ángeles', team1: 'España', team2: 'Austria', emoji1: '🇪🇸', emoji2: '🇦🇹', date: '2', time: '13:00' },
        { id: 'R32_12', label: 'Toronto', team1: 'Portugal', team2: 'Croacia', emoji1: '🇵🇹', emoji2: '🇭🇷', date: '2', time: '17:00' },
        { id: 'R32_13', label: 'Vancouver', team1: 'Suiza', team2: 'Argelia', emoji1: '🇨🇭', emoji2: '🇩🇿', date: '2', time: '21:00' },
        { id: 'R32_14', label: 'Dallas', team1: 'Australia', team2: 'Egipto', emoji1: '🇦🇺', emoji2: '🇪🇬', date: '3', time: '12:00' },
        { id: 'R32_15', label: 'Miami', team1: 'Argentina', team2: 'Cabo Verde', emoji1: '🇦🇷', emoji2: '🇨🇻', date: '3', time: '16:00' },
        { id: 'R32_16', label: 'Kansas City', team1: 'Colombia', team2: 'Ghana', emoji1: '🇨🇴', emoji2: '🇬🇭', date: '3', time: '19:30' }
    ],
    r16: [
        { id: 'R16_1', label: 'Filadelfia', team1: 'Ganador Eliminatoria 1', team2: 'Ganador Eliminatoria 2', emoji1: '🏆', emoji2: '🏆', date: '4', time: '12:00' },
        { id: 'R16_2', label: 'Houston', team1: 'Ganador Eliminatoria 3', team2: 'Ganador Eliminatoria 4', emoji1: '🏆', emoji2: '🏆', date: '4', time: '16:00' },
        { id: 'R16_3', label: 'Dallas', team1: 'Ganador Eliminatoria 5', team2: 'Ganador Eliminatoria 6', emoji1: '🏆', emoji2: '🏆', date: '5', time: '12:00' },
        { id: 'R16_4', label: 'Seattle', team1: 'Ganador Eliminatoria 7', team2: 'Ganador Eliminatoria 8', emoji1: '🏆', emoji2: '🏆', date: '5', time: '16:00' },
        { id: 'R16_5', label: 'Nueva York/Nueva Jersey', team1: 'Ganador Eliminatoria 9', team2: 'Ganador Eliminatoria 10', emoji1: '🏆', emoji2: '🏆', date: '6', time: '12:00' },
        { id: 'R16_6', label: 'Ciudad de México', team1: 'Ganador Eliminatoria 11', team2: 'Ganador Eliminatoria 12', emoji1: '🏆', emoji2: '🏆', date: '6', time: '16:00' },
        { id: 'R16_7', label: 'Atlanta', team1: 'Ganador Eliminatoria 13', team2: 'Ganador Eliminatoria 14', emoji1: '🏆', emoji2: '🏆', date: '7', time: '12:00' },
        { id: 'R16_8', label: 'Vancouver', team1: 'Ganador Eliminatoria 15', team2: 'Ganador Eliminatoria 16', emoji1: '🏆', emoji2: '🏆', date: '7', time: '16:00' }
    ],
    qf: [
        { id: 'QF_1', label: 'Boston', team1: 'Ganador Octavos 1', team2: 'Ganador Octavos 2', emoji1: '🏆', emoji2: '🏆', date: '9', time: '12:00' },
        { id: 'QF_2', label: 'Los Ángeles', team1: 'Ganador Octavos 3', team2: 'Ganador Octavos 4', emoji1: '🏆', emoji2: '🏆', date: '10', time: '12:00' },
        { id: 'QF_3', label: 'Miami', team1: 'Ganador Octavos 5', team2: 'Ganador Octavos 6', emoji1: '🏆', emoji2: '🏆', date: '11', time: '12:00' },
        { id: 'QF_4', label: 'Kansas City', team1: 'Ganador Octavos 7', team2: 'Ganador Octavos 8', emoji1: '🏆', emoji2: '🏆', date: '11', time: '16:00' }
    ],
    sf: [
        { id: 'SF_1', label: 'Dallas', team1: 'Ganador Cuartos 1', team2: 'Ganador Cuartos 2', emoji1: '🏆', emoji2: '🏆', date: '14', time: '19:00' },
        { id: 'SF_2', label: 'Atlanta', team1: 'Ganador Cuartos 3', team2: 'Ganador Cuartos 4', emoji1: '🏆', emoji2: '🏆', date: '15', time: '19:00' }
    ],
    f: [
        { id: 'F_1', label: 'Gran Final - Nueva York/Nueva Jersey', team1: 'Ganador Semifinal 1', team2: 'Ganador Semifinal 2', emoji1: '🏆', emoji2: '🏆', date: '19', time: '14:00' },
        { id: 'F_2', label: 'Partido Tercer Puesto - Miami', team1: 'Perdedor Semifinal 1', team2: 'Perdedor Semifinal 2', emoji1: '🥉', emoji2: '🥉', date: '18', time: '14:00' }
    ]
};

const GROUP_TEAM_MAPPING = {
    '1A': { name: 'México', emoji: '🇲🇽' }, '2A': { name: 'Sudáfrica', emoji: '🇿🇦' },
    '1B': { name: 'Suiza', emoji: '🇨🇭' }, '2B': { name: 'Canadá', emoji: '🇨🇦' },
    '1C': { name: 'Brasil', emoji: '🇧🇷' }, '2C': { name: 'Marruecos', emoji: '🇲🇦' },
    '1D': { name: 'Estados Unidos', emoji: '🇺🇸' }, '2D': { name: 'Turquía', emoji: '🇹🇷' },
    '1E': { name: 'Alemania', emoji: '🇩🇪' }, '2E': { name: 'Ecuador', emoji: '🇪🇨' },
    '1F': { name: 'Países Bajos', emoji: '🇳🇱' }, '2F': { name: 'Japón', emoji: '🇯🇵' },
    '1G': { name: 'Bélgica', emoji: '🇧🇪' }, '2G': { name: 'Egipto', emoji: '🇪🇬' },
    '1H': { name: 'España', emoji: '🇪🇸' }, '2H': { name: 'Uruguay', emoji: '🇺🇾' },
    '1I': { name: 'Francia', emoji: '🇫🇷' }, '2I': { name: 'Senegal', emoji: '🇸🇳' },
    '1J': { name: 'Argentina', emoji: '🇦🇷' }, '2J': { name: 'Austria', emoji: '🇦🇹' },
    '1K': { name: 'Portugal', emoji: '🇵🇹' }, '2K': { name: 'Colombia', emoji: '🇨🇴' },
    '1L': { name: 'Inglaterra', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' }, '2L': { name: 'Croacia', emoji: '🇭🇷' },
    '3rd_1': { name: 'Corea del Sur', emoji: '🇰🇷' },
    '3rd_2': { name: 'Catar', emoji: '🇶🇦' },
    '3rd_3': { name: 'Escocia', emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
    '3rd_4': { name: 'Australia', emoji: '🇦🇺' },
    '3rd_5': { name: 'Costa de Marfil', emoji: '🇨🇮' },
    '3rd_6': { name: 'Suecia', emoji: '🇸🇪' },
    '3rd_7': { name: 'Noruega', emoji: '🇳🇴' },
    '3rd_8': { name: 'Ghana', emoji: '🇬🇭' }
};

const DEFAULT_GROUP_STANDINGS = {
    'A': ['México', 'Sudáfrica', 'Corea del Sur', 'Chequia'],
    'B': ['Suiza', 'Canadá', 'Catar', 'Bosnia y Herzegovina'],
    'C': ['Brasil', 'Marruecos', 'Escocia', 'Haití'],
    'D': ['Estados Unidos', 'Turquía', 'Australia', 'Paraguay'],
    'E': ['Alemania', 'Ecuador', 'Costa de Marfil', 'Curazao'],
    'F': ['Países Bajos', 'Japón', 'Suecia', 'Túnez'],
    'G': ['Bélgica', 'Egipto', 'Irán', 'Nueva Zelanda'],
    'H': ['España', 'Uruguay', 'Cabo Verde', 'Arabia Saudita'],
    'I': ['Francia', 'Senegal', 'Noruega', 'Irak'],
    'J': ['Argentina', 'Austria', 'Argelia', 'Jordania'],
    'K': ['Portugal', 'Colombia', 'RD Congo', 'Uzbekistán'],
    'L': ['Inglaterra', 'Croacia', 'Ghana', 'Panamá']
};

// Fecha límite para votaciones de la Fase de Grupos
const FIRST_STAGE_MIDNIGHT_LOCK_TIME = new Date('2026-06-12T00:00:00-06:00'); // Cierre hoy a las 12 AM (medianoche)
const SECOND_STAGE_LOCK_TIME = new Date('2026-06-20T23:59:00-06:00'); // Antes de las 11:59 PM del 20 de junio

let cachedFirst36Ids = null;

function parseMatchDate(dateStr, timeStr) {
    const day = parseInt(dateStr);
    const [hours, minutes] = timeStr.split(':').map(Number);
    return new Date(2026, 5, day, hours, minutes);
}

function getFirst36MatchIds() {
    const sorted = [...DEFAULT_MATCHES].sort((a, b) => {
        const dateA = parseMatchDate(a.date, a.time);
        const dateB = parseMatchDate(b.date, b.time);
        return dateA - dateB;
    });
    return sorted.slice(0, 36).map(m => m.id);
}

function isMatchLocked(matchId) {
    // Permitir a Martín Pérez editar partidos que no tengan resultado oficial definido aún, SOLO por hoy (hasta el 19 de junio a las 12:00 AM)
    const user = state.users.find(u => u && u.id === state.currentUser);
    if (user && user.id === 'u_1781200493623' && new Date() < new Date(2026, 5, 19, 0, 0, 0)) {
        const official = state.officialResults[matchId];
        const isOfficialDefined = official && official.score1 !== null && official.score2 !== null;
        if (!isOfficialDefined) {
            return false;
        }
    }

    // Los 2 partidos jugados hoy (11 de junio: A1 y A2) se bloquean de inmediato
    if (matchId === 'A1' || matchId === 'A2') {
        return true;
    }
    
    if (!cachedFirst36Ids) {
        cachedFirst36Ids = getFirst36MatchIds();
    }
    const isFirst36 = cachedFirst36Ids.includes(matchId);
    const now = new Date();
    if (isFirst36) {
        return now >= FIRST_STAGE_MIDNIGHT_LOCK_TIME;
    } else {
        return now >= SECOND_STAGE_LOCK_TIME;
    }
}

function parseKnockoutMatchDate(dateStr, timeStr) {
    const day = parseInt(dateStr);
    const [hours, minutes] = timeStr.split(':').map(Number);
    // Si el día es menor a 15, asumimos que es Julio (mes 6 en JS). Si es mayor o igual a 15, es Junio (mes 5 en JS).
    const month = day < 15 ? 6 : 5;
    return new Date(2026, month, day, hours, minutes);
}

function isKnockoutMatchLocked(roundKey, matchIndex) {
    const matches = KNOCKOUT_MATCHES[roundKey];
    const match = matches[matchIndex];
    if (!match) return true;

    // Si tiene fecha y hora asignadas
    if (match.date && match.time) {
        const matchTime = parseKnockoutMatchDate(match.date, match.time);
        const now = new Date();
        return now >= matchTime;
    }

    // Si no tiene fecha/hora definidas, se bloquea si el resultado oficial ya está determinado
    const official = state.officialResults[match.id];
    if (official && getWinnerName(official)) {
        return true;
    }

    return false;
}

function isAllGroupStageLocked() {
    const user = state.users.find(u => u && u.id === state.currentUser);
    if (user && user.id === 'u_1781200493623' && new Date() < new Date(2026, 5, 19, 0, 0, 0)) {
        const hasUnplayed = DEFAULT_MATCHES.some(m => {
            const official = state.officialResults[m.id];
            return !official || official.score1 === null || official.score2 === null;
        });
        if (hasUnplayed) return false;
    }
    return new Date() >= SECOND_STAGE_LOCK_TIME;
}

// Puntos estáticos obtenidos en la Ronda 1 (Primera Quiniela)
const ROUND_1_POINTS = {
  "u_1781033495200": 59,
  "u_1781055826501": 69,
  "u_1781063534557": 61,
  "u_1781063974700": 76,
  "u_1781064499204": 63,
  "u_1781064757578": 68,
  "u_1781065449302": 63,
  "u_1781068447794": 73,
  "u_1781099056603": 68,
  "u_1781105495134": 12,
  "u_1781105787230": 69,
  "u_1781106106363": 67,
  "u_1781106423872": 73,
  "u_1781107492300": 70,
  "u_1781109317296": 56,
  "u_1781111103586": 65,
  "u_1781111959695": 70,
  "u_1781116943100": 65,
  "u_1781119293468": 74,
  "u_1781121115974": 87,
  "u_1781122181066": 73,
  "u_1781123503213": 59,
  "u_1781124734888": 82,
  "u_1781124979916": 61,
  "u_1781134640285": 83,
  "u_1781145675071": 59,
  "u_1781182592035": 76,
  "u_1781188471740": 52,
  "u_1781189007704": 51,
  "u_1781189814687": 86,
  "u_1781196268442": 67,
  "u_1781197220547": 63,
  "u_1781200282528": 30,
  "u_1781200325188": 72,
  "u_1781200493623": 39,
  "u_1781208156403": 0,
  "u_1781397919241": 0,
  "u_1781667897593": 0,
  "u_1781772990820": 0,
  "u_1781908387758": 0,
  "u_1782018990343": 0
};

// Puntos estáticos obtenidos en la Ronda 2 (Segunda Quiniela)
const ROUND_2_POINTS = {
  "u_1781033495200": 67,
  "u_1781055826501": 62,
  "u_1781063534557": 74,
  "u_1781063974700": 62,
  "u_1781064499204": 82,
  "u_1781064757578": 66,
  "u_1781065449302": 72,
  "u_1781068447794": 70,
  "u_1781099056603": 66,
  "u_1781105787230": 71,
  "u_1781106106363": 64,
  "u_1781106423872": 50,
  "u_1781107492300": 71,
  "u_1781109317296": 64,
  "u_1781111103586": 73,
  "u_1781111959695": 67,
  "u_1781116943100": 57,
  "u_1781119293468": 76,
  "u_1781121115974": 77,
  "u_1781122181066": 81,
  "u_1781123503213": 65,
  "u_1781124734888": 80,
  "u_1781124979916": 59,
  "u_1781134640285": 69,
  "u_1781145675071": 57,
  "u_1781182592035": 70,
  "u_1781188471740": 61,
  "u_1781189007704": 52,
  "u_1781189814687": 72,
  "u_1781196268442": 72,
  "u_1781197220547": 66,
  "u_1781200282528": 24,
  "u_1781200325188": 60,
  "u_1781200493623": 39,
  "u_1781208156403": 63,
  "u_1781397919241": 56,
  "u_1781667897593": 71,
  "u_1781908387758": 56,
  "u_1782018990343": 54
};

// Variables de Estado global
let state = {
    activePage: 'profile',
    currentGroup: 'ALL',
    currentRound: 3, // 1 para Ronda 1, 2 para Ronda 2, 3 para Ronda 3 (Fase Final)
    currentKnockoutRound: 'r32',
    adminPhase: 'groups',
    currentUser: null,
    users: [],
    officialResults: {}, // { matchId: { score1, score2 } } o { knockoutId: winnerTeamName }
    leaderboardMode: 'current' // 'current' (R3) o 'accumulated' (R1 + R2 + R3)
};

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadDatabase();
    setupNavigation();
    setupGroupTabs();
});

// Cargar y estructurar base de datos desde el backend (Firebase)
async function loadDatabase() {
    try {
        // Añadimos cache: 'no-store' y un parámetro de fecha para forzar al navegador a obtener datos frescos
        const response = await fetch('https://quiniela-7fd9f-default-rtdb.firebaseio.com/.json?t=' + Date.now(), {
            cache: 'no-store'
        });
        const data = await response.json();

        const officialResults = (data && data.official_results) ? data.official_results : null;
        const users = (data && data.users) ? data.users : null;

        // 1. Cargar Resultados Oficiales
        if (officialResults) {
            state.officialResults = officialResults;
        } else {
            // Si no hay resultados oficiales en la base de datos, inicializar como vacío
            state.officialResults = {};
        }

        // 2. Cargar Usuarios
        if (users) {
            // Firebase puede retornar un objeto { u_1: {...} } o un arreglo. Lo normalizamos a arreglo.
            let rawUsers = Array.isArray(users) ? users.filter(Boolean) : Object.values(users);
            
            // Eliminar usuarios de prueba (demo) o corruptos si existen en la base de datos
            rawUsers = rawUsers.filter(u => u && u.id && u.name && !u.id.startsWith('u_demo'));

            // Agrupar usuarios por nombre normalizado para detectar duplicados de forma inteligente
            const usersByName = {};
            rawUsers.forEach(u => {
                if (u && u.name) {
                    const normalizedName = u.name.trim().toLowerCase();
                    if (!usersByName[normalizedName]) {
                        usersByName[normalizedName] = [];
                    }
                    usersByName[normalizedName].push(u);
                }
            });

            const uniqueUsers = [];
            let databaseHadDuplicates = false;
            const savedCurrentUser = localStorage.getItem('iesa_current_user');

            for (const name in usersByName) {
                const list = usersByName[name];
                if (list.length === 1) {
                    uniqueUsers.push(list[0]);
                } else {
                    databaseHadDuplicates = true;
                    // Seleccionar cuál perfil conservar: preferir el logueado actualmente,
                    // o el que contenga la mayor cantidad de predicciones guardadas.
                    let userToKeep = list.find(u => u.id === savedCurrentUser);
                    if (!userToKeep) {
                        list.sort((a, b) => {
                            const countA = Object.keys(a.predictions || {}).length;
                            const countB = Object.keys(b.predictions || {}).length;
                            return countB - countA;
                        });
                        userToKeep = list[0];
                    }
                    
                    // Asegurar nodos de predicciones
                    if (!userToKeep.predictions) userToKeep.predictions = {};
                    if (!userToKeep.knockoutWinner) userToKeep.knockoutWinner = {};
                    
                    // Consolidar/Combinar todas las predicciones de los perfiles duplicados en el que vamos a mantener
                    list.forEach(u => {
                        if (u !== userToKeep) {
                            if (u.predictions) {
                                for (const matchId in u.predictions) {
                                    if (u.predictions[matchId] && u.predictions[matchId].score1 !== null && u.predictions[matchId].score2 !== null) {
                                        userToKeep.predictions[matchId] = u.predictions[matchId];
                                    }
                                }
                            }
                            if (u.knockoutWinner) {
                                for (const key in u.knockoutWinner) {
                                    if (u.knockoutWinner[key]) {
                                        userToKeep.knockoutWinner[key] = u.knockoutWinner[key];
                                    }
                                }
                            }
                        }
                    });
                    
                    uniqueUsers.push(userToKeep);
                }
            }
            
            state.users = uniqueUsers;

            // Si detectamos formato viejo (arreglo), índices numéricos o duplicados,
            // reescribimos el nodo '/users' por completo de forma limpia
            const hadNumericKeys = !Array.isArray(users) && Object.keys(users).some(k => !isNaN(k));
            if (databaseHadDuplicates || Array.isArray(users) || hadNumericKeys) {
                const cleanedUsersObj = {};
                uniqueUsers.forEach(u => {
                    if (u && u.id) {
                        cleanedUsersObj[u.id] = u;
                    }
                });
                try {
                    await fetch('https://quiniela-7fd9f-default-rtdb.firebaseio.com/users.json', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(cleanedUsersObj)
                    });
                } catch (e) {
                    console.error("Error al reescribir base de datos limpia:", e);
                }
            }

            state.users.forEach(u => {
                if (!u.predictions) u.predictions = {};
                if (!u.knockoutWinner) u.knockoutWinner = {};
            });

            // Asegurarnos de que el administrador siempre esté registrado en la base de datos
            if (!state.users.find(u => u.isAdmin)) {
                state.users.unshift({
                    id: 'u_admin',
                    name: 'Administrador IESA',
                    dept: 'Tecnología',
                    isAdmin: true,
                    password: '1234',
                    predictions: {},
                    knockoutWinner: {}
                });
                await saveUsersToStorage();
            }
        } else {
            // Inicializar únicamente el perfil del administrador por defecto
            state.users = [
                {
                    id: 'u_admin',
                    name: 'Administrador IESA',
                    dept: 'Tecnología',
                    isAdmin: true,
                    password: '1234',
                    predictions: {},
                    knockoutWinner: {}
                }
            ];
            await saveUsersToStorage();
        }

        // 3. Cargar usuario activo (se mantiene en localStorage local al navegador)
        const savedCurrentUser = localStorage.getItem('iesa_current_user');
        if (savedCurrentUser && state.users.find(u => u.id === savedCurrentUser)) {
            state.currentUser = savedCurrentUser;
            
            // Recuperar el estado guardado de la navegación/filtros
            const savedPage = localStorage.getItem('iesa_active_page') || 'profile';
            state.currentGroup = localStorage.getItem('iesa_current_group') || 'ALL';
            state.currentRound = parseInt(localStorage.getItem('iesa_current_round') || '1');
            state.currentKnockoutRound = localStorage.getItem('iesa_current_knockout_round') || 'r32';
            state.adminPhase = localStorage.getItem('iesa_admin_phase') || 'groups';
            state.leaderboardMode = localStorage.getItem('iesa_leaderboard_mode') || 'current';
            
            switchPage(savedPage);
        } else {
            state.currentUser = null;
            switchPage('login');
        }

    } catch (error) {
        console.error("Error al cargar la base de datos de Firebase:", error);
    }
}

// Guardar usuarios en la base de datos de forma segura para evitar sobreescrituras concurrentes
async function saveUsersToStorage() {
    const activeUser = state.users.find(u => u.id === state.currentUser);
    
    // Si el usuario activo es administrador, realizamos un PATCH de los puntajes
    // actualizados sin sobreescribir las predicciones de los usuarios.
    if (activeUser && activeUser.isAdmin) {
        const patchData = {};
        state.users.forEach(u => {
            if (u && u.id && !u.isAdmin) {
                patchData[`${u.id}/totalPoints`] = u.totalPoints || 0;
                patchData[`${u.id}/previousRank`] = u.previousRank !== undefined ? u.previousRank : null;
            }
        });
        try {
            await fetch('https://quiniela-7fd9f-default-rtdb.firebaseio.com/users.json', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(patchData)
            });
        } catch (error) {
            console.error("Error al actualizar lote de puntajes en Firebase:", error);
        }
    } else if (activeUser) {
        // Si es un usuario común, solo guarda su propia información
        await saveUserRecord(activeUser);
    }
}

// Guardar un perfil de usuario individual de forma aislada
async function saveUserRecord(user) {
    if (!user || !user.id) return;
    try {
        await fetch(`https://quiniela-7fd9f-default-rtdb.firebaseio.com/users/${user.id}.json`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    } catch (error) {
        console.error(`Error al guardar usuario ${user.id} en Firebase:`, error);
    }
}

// Guardar resultados oficiales en la base de datos a través del backend
async function saveOfficialResultsToStorage() {
    try {
        await fetch('https://quiniela-7fd9f-default-rtdb.firebaseio.com/official_results.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state.officialResults)
        });
    } catch (error) {
        console.error("Error al guardar resultados en Firebase:", error);
    }
}

// Cambiar de Pestaña (SPA Routing)
function switchPage(pageId, navElement) {
    if (!state.currentUser && pageId !== 'login') {
        pageId = 'login';
    }
    state.activePage = pageId;
    if (pageId !== 'login') {
        localStorage.setItem('iesa_active_page', pageId);
    }
    
    // Cambiar clases en las secciones de página
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) targetPage.classList.add('active');

    // Cambiar clases en la barra de navegación inferior
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    if (navElement) {
        navElement.classList.add('active');
    } else {
        const activeNav = document.querySelector(`.bottom-nav .nav-item[onclick*="${pageId}"]`);
        if (activeNav) activeNav.classList.add('active');
    }

    // Ocultar barra si está en la página de login
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) {
        bottomNav.style.display = (pageId === 'login') ? 'none' : 'grid';
    }

    renderAll();
}

// Cambiar pestaña del Bracket Fase Final
function switchKnockoutRound(roundKey, element) {
    state.currentKnockoutRound = roundKey;
    localStorage.setItem('iesa_current_knockout_round', roundKey);
    document.querySelectorAll('#knockoutNav .group-tab').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
    renderKnockoutMatches();
}

// Cambiar pestaña de administración en el panel Admin
function switchAdminPhase(phaseKey, element) {
    state.adminPhase = phaseKey;
    localStorage.setItem('iesa_admin_phase', phaseKey);
    document.querySelectorAll('#adminPhaseNav .group-tab').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
    renderAdminMatches();
}

function setupGroupTabs() {
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    
    // Pestañas para Pronósticos del Usuario
    const nav = document.getElementById('groupsNav');
    if (nav) {
        nav.innerHTML = '';
        
        // Pestaña especial "Todos"
        const allTab = document.createElement('div');
        allTab.className = `group-tab ${state.currentGroup === 'ALL' ? 'active' : ''}`;
        allTab.textContent = 'Todos';
        allTab.onclick = () => {
            state.currentGroup = 'ALL';
            localStorage.setItem('iesa_current_group', 'ALL');
            document.querySelectorAll('#groupsNav .group-tab').forEach(t => t.classList.remove('active'));
            allTab.classList.add('active');
            document.getElementById('currentGroupTitle').innerHTML = `Todos los Partidos <span>Pronósticos</span>`;
            renderGroupMatches();
        };
        nav.appendChild(allTab);
        
        groups.forEach(g => {
            const tab = document.createElement('div');
            tab.className = `group-tab ${g === state.currentGroup ? 'active' : ''}`;
            tab.textContent = `Grupo ${g}`;
            tab.onclick = () => {
                state.currentGroup = g;
                localStorage.setItem('iesa_current_group', g);
                document.querySelectorAll('#groupsNav .group-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById('currentGroupTitle').innerHTML = `Grupo ${g} <span>Pronósticos</span>`;
                renderGroupMatches();
            };
            nav.appendChild(tab);
        });
    }

    // Pestañas para Administrador
    const adminNav = document.getElementById('adminGroupsNav');
    if (adminNav) {
        adminNav.innerHTML = '';
        groups.forEach(g => {
            const tab = document.createElement('div');
            tab.className = `group-tab ${g === state.currentGroup ? 'active' : ''}`;
            tab.textContent = `Grupo ${g}`;
            tab.onclick = () => {
                state.currentGroup = g;
                localStorage.setItem('iesa_current_group', g);
                document.querySelectorAll('#adminGroupsNav .group-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById('adminGroupTitle').innerHTML = `Grupo ${g} <span>Resultados Oficiales</span>`;
                renderAdminMatches();
            };
            adminNav.appendChild(tab);
        });
    }
}

// Configuración inicial de UI y eventos
function setupNavigation() {
    // Si queremos habilitar eventos globales, scroll a top al cambiar página
    window.scrollTo(0, 0);
}

// Renderizar toda la aplicación en base al estado
function renderAll() {
    // Si no hay sesión activa, redirigir forzosamente a login
    if (!state.currentUser) {
        if (state.activePage !== 'login') {
            state.activePage = 'login';
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            const loginPage = document.getElementById('page-login');
            if (loginPage) loginPage.classList.add('active');
            const bottomNav = document.querySelector('.bottom-nav');
            if (bottomNav) bottomNav.style.display = 'none';
        }
        populateLoginUsers();
        return;
    }

    // Validar y limpiar predicciones/resultados que queden inválidos por cambios de standings
    const userChanged = validateKnockoutPredictions(false);
    const officialChanged = validateKnockoutPredictions(true);
    
    if (userChanged) {
        saveUsersToStorage();
    }
    if (officialChanged) {
        saveOfficialResultsToStorage();
    }

    // Calcular puntos de todos antes de renderizar
    calculateAllPoints();

    // Renderizar datos del perfil de cabecera
    const user = state.users.find(u => u.id === state.currentUser);

    // Control de visibilidad del botón de Guardar en la cabecera
    const headerSaveBtn = document.getElementById('headerSavePredictionsBtn');
    if (headerSaveBtn) {
        if (user && !user.isAdmin && !isAllGroupStageLocked() && state.activePage === 'groups') {
            headerSaveBtn.style.display = 'flex';
        } else {
            headerSaveBtn.style.display = 'none';
        }
    }

    // Control de visibilidad de la pestaña Administrador
    const adminTab = document.getElementById('nav-item-admin');
    if (adminTab) {
        if (user && user.isAdmin) {
            adminTab.style.display = 'flex';
        } else {
            adminTab.style.display = 'none';
            // Si el usuario activo no es administrador y está en la página admin, redirigir a perfil
            if (state.activePage === 'admin') {
                state.activePage = 'profile';
                document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
                document.getElementById('page-profile').classList.add('active');
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                const firstNavItem = document.querySelector('.bottom-nav .nav-item');
                if (firstNavItem) firstNavItem.classList.add('active');
            }
        }
    }

    if (user) {
        const headerUserNameEl = document.getElementById('headerUserName');
        if (headerUserNameEl) headerUserNameEl.textContent = user.name.split(' ')[0];
        
        const profileNameEl = document.getElementById('profileName');
        if (profileNameEl) {
            let profileLogoHtml = '';
            if (user.favoriteTeam && TEAM_LOGOS[user.favoriteTeam]) {
                profileLogoHtml = `<img src="${TEAM_LOGOS[user.favoriteTeam]}" alt="${user.favoriteTeam}" style="width: 24px; height: 24px; object-fit: contain; vertical-align: middle;" />`;
            }
            profileNameEl.innerHTML = `<span>${user.name}</span> ${profileLogoHtml}`;
        }
        
        const profileDeptEl = document.getElementById('profileDept');
        if (profileDeptEl) profileDeptEl.textContent = user.dept;
        
        const profilePointsEl = document.getElementById('profilePoints');
        if (profilePointsEl) profilePointsEl.textContent = user.totalPoints || 0;

        // Estadísticas de pronósticos realizados
        const predictedGroupsCount = DEFAULT_MATCHES.filter(m => user.predictions[m.id] && user.predictions[m.id].score1 !== null && user.predictions[m.id].score2 !== null).length;
        const profileMatchesPredictedEl = document.getElementById('profileMatchesPredicted');
        if (profileMatchesPredictedEl) profileMatchesPredictedEl.textContent = `${predictedGroupsCount}/${DEFAULT_MATCHES.length}`;

        const predictedKnockoutsCount = Object.keys(user.knockoutWinner || {}).length;
        const profileKnockoutsPredictedEl = document.getElementById('profileKnockoutsPredicted');
        if (profileKnockoutsPredictedEl) profileKnockoutsPredictedEl.textContent = `${predictedKnockoutsCount}/32`;

        // Lógica de Selección de Equipo Favorito
        const profileFavoriteTeamEl = document.getElementById('profileFavoriteTeam');
        if (profileFavoriteTeamEl) {
            // Poblar las opciones si solo está la opción "Ninguno"
            if (profileFavoriteTeamEl.options.length <= 1) {
                const sortedTeams = Object.keys(TEAM_LOGOS).sort();
                sortedTeams.forEach(team => {
                    const opt = document.createElement('option');
                    opt.value = team;
                    opt.textContent = team;
                    profileFavoriteTeamEl.appendChild(opt);
                });
            }
            
            // Establecer el valor seleccionado actual
            profileFavoriteTeamEl.value = user.favoriteTeam || "";
            
            // Actualizar la previsualización del logo
            const profileTeamLogoEl = document.getElementById('profileTeamLogo');
            if (profileTeamLogoEl) {
                if (user.favoriteTeam && TEAM_LOGOS[user.favoriteTeam]) {
                    profileTeamLogoEl.src = TEAM_LOGOS[user.favoriteTeam];
                    profileTeamLogoEl.style.display = 'block';
                } else {
                    profileTeamLogoEl.src = '';
                    profileTeamLogoEl.style.display = 'none';
                }
            }

            // Registrar el evento change para actualizar la base de datos
            if (!profileFavoriteTeamEl.dataset.listenerAttached) {
                profileFavoriteTeamEl.addEventListener('change', async (e) => {
                    const selectedTeam = e.target.value;
                    const u = state.users.find(usr => usr.id === state.currentUser);
                    if (u) {
                        u.favoriteTeam = selectedTeam || null;
                        
                        // Actualizar la previsualización del logo inmediatamente
                        const logoEl = document.getElementById('profileTeamLogo');
                        if (logoEl) {
                            if (selectedTeam && TEAM_LOGOS[selectedTeam]) {
                                logoEl.src = TEAM_LOGOS[selectedTeam];
                                logoEl.style.display = 'block';
                            } else {
                                logoEl.src = '';
                                logoEl.style.display = 'none';
                            }
                        }
                        
                        // Actualizar el logo al lado del nombre del perfil inmediatamente
                        const nameEl = document.getElementById('profileName');
                        if (nameEl) {
                            let profileLogoHtml = '';
                            if (selectedTeam && TEAM_LOGOS[selectedTeam]) {
                                profileLogoHtml = `<img src="${TEAM_LOGOS[selectedTeam]}" alt="${selectedTeam}" style="width: 24px; height: 24px; object-fit: contain; vertical-align: middle;" />`;
                            }
                            nameEl.innerHTML = `<span>${u.name}</span> ${profileLogoHtml}`;
                        }
                        
                        await saveUsersToStorage();
                        // Actualizar la tabla general si existe
                        renderLeaderboard();
                    }
                });
                profileFavoriteTeamEl.dataset.listenerAttached = "true";
            }
        }
    }

    // Renderizado condicional según pestaña activa
    if (state.activePage === 'groups') {
        renderGroupMatches();
    } else if (state.activePage === 'knockout') {
        renderKnockoutMatches();
    } else if (state.activePage === 'leaderboard') {
        renderLeaderboard();
    } else if (state.activePage === 'admin') {
        renderAdminMatches();
    }
}

// Renderizar Partidos de la Fase de Grupos
function renderGroupMatches() {
    const list = document.getElementById('groupMatchesList');
    if (!list) return;
    list.innerHTML = '';
    
    // Sincronizar el título de la sección y la pestaña activa del grupo
    const titleEl = document.getElementById('currentGroupTitle');
    if (titleEl) {
        if (state.currentGroup === 'ALL') {
            titleEl.innerHTML = `Todos los Partidos <span>Pronósticos</span>`;
        } else {
            titleEl.innerHTML = `Grupo ${state.currentGroup} <span>Pronósticos</span>`;
        }
    }
    
    // Sincronizar clase active en las pestañas de grupos
    document.querySelectorAll('#groupsNav .group-tab').forEach(tab => {
        if (state.currentGroup === 'ALL' && tab.textContent.trim() === 'Todos') {
            tab.classList.add('active');
        } else if (tab.textContent.trim() === `Grupo ${state.currentGroup}`) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Controlar visibilidad de subtab para Ronda 1 y Ronda 2
    const roundSubNav = document.getElementById('roundSubNav');
    if (roundSubNav) {
        if (state.currentGroup === 'ALL') {
            roundSubNav.style.display = 'flex';
            const tab1 = document.getElementById('subtab-round1');
            const tab2 = document.getElementById('subtab-round2');
            if (tab1 && tab2) {
                if (state.currentRound === 1) {
                    tab1.classList.add('active');
                    tab2.classList.remove('active');
                } else {
                    tab1.classList.remove('active');
                    tab2.classList.add('active');
                }
            }
        } else {
            roundSubNav.style.display = 'none';
        }
    }

    // Filtrar partidos
    let filteredMatches = DEFAULT_MATCHES;
    if (state.currentGroup !== 'ALL') {
        filteredMatches = DEFAULT_MATCHES.filter(m => m.group === state.currentGroup);
    }
    
    // Ordenar cronológicamente
    filteredMatches = [...filteredMatches].sort((a, b) => {
        const dateA = parseMatchDate(a.date, a.time);
        const dateB = parseMatchDate(b.date, b.time);
        return dateA - dateB;
    });

    // Si está en Todos, filtrar por Ronda 1 o Ronda 2
    if (state.currentGroup === 'ALL') {
        if (state.currentRound === 1) {
            filteredMatches = filteredMatches.slice(0, 36);
        } else {
            filteredMatches = filteredMatches.slice(36);
        }
    }
    
    const user = state.users.find(u => u.id === state.currentUser);
    if (!user) return;

    // Agregar banner de estado de la votación
    const now = new Date();
    const isFirstStageMidnightLocked = now >= FIRST_STAGE_MIDNIGHT_LOCK_TIME;
    const isSecondStageLocked = now >= SECOND_STAGE_LOCK_TIME;
    const banner = document.createElement('div');
    
    if (isSecondStageLocked) {
        banner.className = 'lockout-banner locked';
        banner.innerHTML = `
            <span class="lockout-icon">🔒</span>
            <div class="lockout-content">
                <div class="lockout-title">Votaciones de Grupos Cerradas</div>
                <div class="lockout-desc">El plazo para pronosticar todos los partidos de la fase de grupos ha finalizado. Puedes ver tus pronósticos y marcadores oficiales.</div>
            </div>
        `;
    } else if (isFirstStageMidnightLocked) {
        const diffMs = SECOND_STAGE_LOCK_TIME - now;
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffHours / 24);
        let timeRemainingText = '';
        if (diffDays > 0) {
            timeRemainingText = `${diffDays} día(s) y ${diffHours % 24} hora(s)`;
        } else {
            timeRemainingText = `${diffHours} hora(s)`;
        }
        
        banner.className = 'lockout-banner active';
        banner.style.background = 'rgba(245, 158, 11, 0.08)';
        banner.style.borderColor = 'rgba(245, 158, 11, 0.2)';
        banner.innerHTML = `
            <span class="lockout-icon">🔓</span>
            <div class="lockout-content">
                <div class="lockout-title">Votaciones Parcialmente Abiertas</div>
                <div class="lockout-desc">Los primeros 36 partidos se han bloqueado. Los últimos 36 partidos siguen abiertos para pronosticar. <strong style="color:var(--warning-color);">Faltan ${timeRemainingText} para el cierre definitivo (20 de junio a las 11:59 PM).</strong></div>
            </div>
        `;
    } else {
        const diffMs = FIRST_STAGE_MIDNIGHT_LOCK_TIME - now;
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMins = Math.floor((diffMs / (1000 * 60)) % 60);
        
        banner.className = 'lockout-banner active';
        banner.innerHTML = `
            <span class="lockout-icon animated-icon">🔓</span>
            <div class="lockout-content">
                <div class="lockout-title">Votaciones de Grupos Habilitadas</div>
                <div class="lockout-desc">Los 2 partidos de hoy (11 de junio) ya están cerrados. Tienes hasta hoy a las 12:00 AM (medianoche) para pronosticar el resto del primer bloque de partidos. <strong style="color:var(--success-color); white-space: nowrap;">(Faltan ${diffHours} horas y ${diffMins} minutos)</strong>. Los últimos 36 partidos cierran el 20 de junio a las 11:59 PM.</div>
            </div>
        `;
    }
    list.appendChild(banner);

    // Agrupar por fecha
    const matchesByDate = {};
    filteredMatches.forEach(match => {
        if (!matchesByDate[match.date]) {
            matchesByDate[match.date] = [];
        }
        matchesByDate[match.date].push(match);
    });

    // Renderizar grupos por fechas
    for (const date in matchesByDate) {
        const dateGroup = document.createElement('div');
        dateGroup.className = 'date-group';
        
        const dateHeader = document.createElement('div');
        dateHeader.className = 'date-group-header';
        dateHeader.textContent = date;
        dateGroup.appendChild(dateHeader);

        matchesByDate[date].forEach(match => {
            const prediction = user.predictions[match.id] || { score1: null, score2: null };
            const official = state.officialResults[match.id];
            
            let statusBadge = `<span class="match-status-badge status-pending">Pendiente</span>`;
            if (prediction.score1 !== null && prediction.score2 !== null) {
                statusBadge = `<span class="match-status-badge status-filled">Pronosticado</span>`;
            }

            const exactPrediction = prediction.score1 !== null && prediction.score2 !== null;
            
            let pointsEarnedHtml = '';
            if (official && exactPrediction) {
                const pts = calculateMatchPoints(prediction, official);
                pointsEarnedHtml = `<span class="points-earned ${pts > 0 ? 'success' : 'zero'}">+${pts} Pts</span>`;
            }

            const officialScoreHtml = official 
                ? `<div class="real-score-badge">Oficial: <span>${official.score1} - ${official.score2}</span></div>`
                : `<div class="real-score-badge" style="font-size:0.75rem; color:var(--text-muted);">Sin resultado oficial</div>`;

            const card = document.createElement('div');
            card.className = 'match-card';
            card.setAttribute('data-match-id', match.id);

            let scoreSelectorHtml = '';
            if (user.isAdmin) {
                scoreSelectorHtml = `
                    <div class="score-selector">
                        <input type="number" class="score-input-direct" value="${prediction.score1 !== null ? prediction.score1 : ''}" disabled style="opacity: 0.8;">
                        <span class="score-separator">vs</span>
                        <input type="number" class="score-input-direct" value="${prediction.score2 !== null ? prediction.score2 : ''}" disabled style="opacity: 0.8;">
                    </div>
                `;
            } else if (isMatchLocked(match.id)) {
                scoreSelectorHtml = `
                    <div class="score-selector">
                        <input type="number" class="score-input-direct" value="${prediction.score1 !== null ? prediction.score1 : ''}" disabled style="opacity: 0.7; cursor: not-allowed; background: rgba(255,255,255,0.02);">
                        <span class="score-separator">vs</span>
                        <input type="number" class="score-input-direct" value="${prediction.score2 !== null ? prediction.score2 : ''}" disabled style="opacity: 0.7; cursor: not-allowed; background: rgba(255,255,255,0.02);">
                    </div>
                `;
            } else {
                scoreSelectorHtml = `
                    <div class="score-selector">
                        <input type="number" min="0" class="score-input-direct" value="${prediction.score1 !== null ? prediction.score1 : ''}" placeholder="- " oninput="saveDirectPrediction('${match.id}', 1, this.value)">
                        <span class="score-separator">vs</span>
                        <input type="number" min="0" class="score-input-direct" value="${prediction.score2 !== null ? prediction.score2 : ''}" placeholder="- " oninput="saveDirectPrediction('${match.id}', 2, this.value)">
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="match-card-header">
                    <span>Grupo ${match.group}</span>
                    <span class="match-card-time">${match.time || '18:00'}</span>
                </div>
                <div class="match-body">
                    <div class="team-container">
                        <div class="team-flag-card">${match.emoji1}</div>
                        <span class="team-name">${match.team1}</span>
                    </div>
                    
                    ${scoreSelectorHtml}
 
                    <div class="team-container">
                        <div class="team-flag-card">${match.emoji2}</div>
                        <span class="team-name">${match.team2}</span>
                    </div>
                </div>
                <div class="match-footer">
                    ${officialScoreHtml}
                    ${pointsEarnedHtml}
                    ${statusBadge}
                </div>
            `;
            dateGroup.appendChild(card);
        });
        list.appendChild(dateGroup);
    }
}

// Renderizar la fase eliminatoria (Bracket)
function renderKnockoutMatches() {
    // Validar antes de renderizar
    const userChanged = validateKnockoutPredictions(false);
    if (userChanged) {
        saveUsersToStorage();
    }

    const list = document.getElementById('knockoutMatchesList');
    list.innerHTML = '';

    const roundKey = state.currentKnockoutRound;
    const matches = KNOCKOUT_MATCHES[roundKey];
    const user = state.users.find(u => u.id === state.currentUser);

    // Obtener los equipos dinámicamente según el progreso de la fase de grupos o valores fijos mapeados
    matches.forEach((match, index) => {
        let team1 = getTeamForKnockout(match.team1, true); // Forzamos true para tomar los resultados oficiales del admin
        let team2 = getTeamForKnockout(match.team2, true); // Forzamos true para tomar los resultados oficiales del admin

        // Si es una ronda avanzada (Octavos, Cuartos, Semis, Final), el nombre del equipo depende de las selecciones del usuario en la ronda anterior
        if (roundKey === 'r16') {
            team1 = getWinnerOfPreviousMatch('r32', index * 2) || { name: `Ganador Eliminatoria ${index * 2 + 1}`, emoji: '🏆' };
            team2 = getWinnerOfPreviousMatch('r32', index * 2 + 1) || { name: `Ganador Eliminatoria ${index * 2 + 2}`, emoji: '🏆' };
        } else if (roundKey === 'qf') {
            team1 = getWinnerOfPreviousMatch('r16', index * 2) || { name: `Ganador Octavos ${index * 2 + 1}`, emoji: '🏆' };
            team2 = getWinnerOfPreviousMatch('r16', index * 2 + 1) || { name: `Ganador Octavos ${index * 2 + 2}`, emoji: '🏆' };
        } else if (roundKey === 'sf') {
            team1 = getWinnerOfPreviousMatch('qf', index * 2) || { name: `Ganador Cuartos ${index * 2 + 1}`, emoji: '🏆' };
            team2 = getWinnerOfPreviousMatch('qf', index * 2 + 1) || { name: `Ganador Cuartos ${index * 2 + 2}`, emoji: '🏆' };
        } else if (roundKey === 'f') {
            if (index === 0) {
                team1 = getWinnerOfPreviousMatch('sf', 0) || { name: 'Finalista 1', emoji: '🏆' };
                team2 = getWinnerOfPreviousMatch('sf', 1) || { name: 'Finalista 2', emoji: '🏆' };
            } else {
                team1 = getLoserOfPreviousMatch('sf', 0) || { name: 'Perdedor Semifinal 1', emoji: '🥉' };
                team2 = getLoserOfPreviousMatch('sf', 1) || { name: 'Perdedor Semifinal 2', emoji: '🥉' };
            }
        }

        const predictedWinnerVal = user.knockoutWinner[`${roundKey}_${index}`];
        const predictedWinner = getWinnerName(predictedWinnerVal);
        const predictedMethod = getWinnerMethod(predictedWinnerVal);

        const officialWinnerVal = state.officialResults[match.id];
        const officialWinner = getWinnerName(officialWinnerVal);
        const officialMethod = getWinnerMethod(officialWinnerVal);

        let pointsEarnedHtml = '';
        if (officialWinner && predictedWinner) {
            const isCorrectWinner = officialWinner === predictedWinner;
            let pts = 0;
            if (isCorrectWinner) {
                pts += 3;
                if (officialMethod === predictedMethod) {
                    pts += 2;
                }
            }
            pointsEarnedHtml = `<span class="points-earned ${pts > 0 ? 'success' : 'zero'}">+${pts} Pts</span>`;
        }

        const matchDiv = document.createElement('div');
        matchDiv.className = 'bracket-match';
        
        const isTeam1Selected = predictedWinner === team1.name;
        const isTeam2Selected = predictedWinner === team2.name;

        const isLocked = isKnockoutMatchLocked(roundKey, index);
        const methodLabels = { regular: 'Fase Regular', extra: 'Tiempos extra', penalties: 'Penales' };
        const officialWinnerHtml = officialWinner 
            ? `<div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px; font-size:0.75rem;">
                <span style="color:var(--warning-color); font-weight:bold;">Ganador Oficial: ${officialWinner}</span>
                <span style="color:var(--text-muted); font-size:0.7rem; font-weight:600;">(${methodLabels[officialMethod] || officialMethod})</span>
               </div>`
            : `<span style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">Por jugar</span>`;

        const clickHandler1 = (user.isAdmin || isLocked) ? '' : `onclick="selectKnockoutWinner('${roundKey}', ${index}, '${team1.name}')"`;
        const clickHandler2 = (user.isAdmin || isLocked) ? '' : `onclick="selectKnockoutWinner('${roundKey}', ${index}, '${team2.name}')"`;
        const cursorStyle = (user.isAdmin || isLocked) ? 'style="cursor: default;"' : '';

        // Selector de método de victoria para el usuario
        let methodSelectorHtml = '';
        if (predictedWinner && !user.isAdmin) {
            methodSelectorHtml = `
                <div style="margin-top: 8px; border-top: 1px dashed var(--border-color); padding-top: 8px; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                    <span style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 500;">Victoria por:</span>
                    <select ${isLocked ? 'disabled' : ''} class="form-input" style="font-size: 0.75rem; padding: 2px 6px; border-radius: 6px; border: 1px solid var(--border-color); background: rgba(255,255,255,0.05); color: var(--text-primary); cursor: pointer; outline: none; width: auto; font-weight: 600;" onchange="selectKnockoutMethod('${roundKey}', ${index}, this.value)">
                        <option value="regular" ${predictedMethod === 'regular' ? 'selected' : ''}>Fase Regular</option>
                        <option value="extra" ${predictedMethod === 'extra' ? 'selected' : ''}>Tiempos extra</option>
                        <option value="penalties" ${predictedMethod === 'penalties' ? 'selected' : ''}>Penales</option>
                    </select>
                </div>
            `;
        }

        matchDiv.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:var(--text-muted);">
                <span>${match.label}</span>
                ${pointsEarnedHtml}
            </div>
            
            <div class="bracket-team-row ${isTeam1Selected ? 'selected-winner' : ''}" ${clickHandler1} ${cursorStyle}>
                <div class="bracket-team-info">
                    <span>${team1.emoji}</span>
                    <span>${team1.name}</span>
                </div>
                <span class="bracket-team-winner-indicator">✔ Ganador</span>
            </div>

            <div class="bracket-team-row ${isTeam2Selected ? 'selected-winner' : ''}" ${clickHandler2} ${cursorStyle}>
                <div class="bracket-team-info">
                    <span>${team2.emoji}</span>
                    <span>${team2.name}</span>
                </div>
                <span class="bracket-team-winner-indicator">✔ Ganador</span>
            </div>
            ${methodSelectorHtml}
            ${officialWinnerHtml}
        `;
        list.appendChild(matchDiv);
    });
}

// Obtener equipo para llaves iniciales (Octavos)
function getTeamForKnockout(slotId, isOfficial = false) {
    return resolveTeamSlot(slotId, isOfficial);
}

// Resolver dinámicamente el equipo para un slot de fase final
function resolveTeamSlot(slotId, isOfficial) {
    const groupMatch = slotId.match(/^([1-2])([A-L])$/);
    if (groupMatch) {
        const position = parseInt(groupMatch[1]);
        const group = groupMatch[2];
        const standings = getCalculatedStandings(group, isOfficial);
        
        const totalPlayed = standings.reduce((sum, t) => sum + t.played, 0);
        // Cada grupo tiene 6 partidos. Con 2 equipos por partido, la suma de 'played' debe ser 12 para estar finalizado.
        if (totalPlayed < 12) {
            return { name: `${position}º Grupo ${group}`, emoji: '🏳️' };
        }
        
        const team = standings[position - 1];
        return team ? { name: team.name, emoji: team.emoji } : { name: `${position}º Grupo ${group}`, emoji: '🏳️' };
    }
    
    const thirdMatch = slotId.match(/^3rd_([1-8])$/);
    if (thirdMatch) {
        const index = parseInt(thirdMatch[1]);
        
        // Verificar si todos los grupos de la fase de grupos han terminado sus partidos
        const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
        const anyGroupUnfinished = groups.some(g => {
            const groupStandings = getCalculatedStandings(g, isOfficial);
            const playedCount = groupStandings.reduce((sum, t) => sum + t.played, 0);
            return playedCount < 12;
        });
        
        if (anyGroupUnfinished) {
            return { name: `3º Clasificado ${index}`, emoji: '🏳️' };
        }
        
        const bestThirds = getBestThirdPlaces(isOfficial);
        const team = bestThirds[index - 1];
        return team ? { name: team.name, emoji: team.emoji } : { name: `3º Clasificado ${index}`, emoji: '🏳️' };
    }
    
    return { name: slotId, emoji: getTeamEmoji(slotId) };
}

// Calcular la tabla de posiciones de un grupo
function getCalculatedStandings(groupLetter, isOfficial) {
    const groupMatches = DEFAULT_MATCHES.filter(m => m.group === groupLetter);
    const teamsMap = {};
    
    groupMatches.forEach(m => {
        if (!teamsMap[m.team1]) {
            teamsMap[m.team1] = { name: m.team1, emoji: m.emoji1, points: 0, gd: 0, gf: 0, ga: 0, played: 0, wins: 0, draws: 0, losses: 0 };
        }
        if (!teamsMap[m.team2]) {
            teamsMap[m.team2] = { name: m.team2, emoji: m.emoji2, points: 0, gd: 0, gf: 0, ga: 0, played: 0, wins: 0, draws: 0, losses: 0 };
        }
    });

    const user = state.users.find(u => u.id === state.currentUser);

    groupMatches.forEach(m => {
        let s1 = null;
        let s2 = null;
        
        if (isOfficial) {
            const res = state.officialResults[m.id];
            if (res) {
                s1 = res.score1;
                s2 = res.score2;
            }
        } else if (user && user.predictions) {
            const res = user.predictions[m.id];
            if (res) {
                s1 = res.score1;
                s2 = res.score2;
            }
        }
        
        if (s1 !== null && s1 !== undefined && s2 !== null && s2 !== undefined) {
            const t1 = teamsMap[m.team1];
            const t2 = teamsMap[m.team2];
            
            t1.played++;
            t2.played++;
            t1.gf += s1;
            t1.ga += s2;
            t2.gf += s2;
            t2.ga += s1;
            
            t1.gd = t1.gf - t1.ga;
            t2.gd = t2.gf - t2.ga;
            
            if (s1 > s2) {
                t1.points += 3;
                t1.wins++;
                t2.losses++;
            } else if (s1 < s2) {
                t2.points += 3;
                t2.wins++;
                t1.losses++;
            } else {
                t1.points += 1;
                t2.points += 1;
                t1.draws++;
                t2.draws++;
            }
        }
    });

    const totalPlayedInGroup = Object.values(teamsMap).reduce((sum, t) => sum + t.played, 0);
    if (totalPlayedInGroup === 0) {
        return Object.values(teamsMap).sort((a, b) => {
            const list = DEFAULT_GROUP_STANDINGS[groupLetter];
            return list.indexOf(a.name) - list.indexOf(b.name);
        });
    }

    return Object.values(teamsMap).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.gd !== a.gd) return b.gd - a.gd;
        if (b.gf !== a.gf) return b.gf - a.gf;
        return a.name.localeCompare(b.name);
    });
}

// Obtener los mejores 8 terceros puestos (establecido según la clasificación oficial final del torneo)
function getBestThirdPlaces(isOfficial) {
    return [
        { name: 'RD Congo', emoji: '🇨🇩' },
        { name: 'Suecia', emoji: '🇸🇪' },
        { name: 'Ghana', emoji: '🇬🇭' },
        { name: 'Ecuador', emoji: '🇪🇨' },
        { name: 'Bosnia y Herzegovina', emoji: '🇧🇦' },
        { name: 'Argelia', emoji: '🇩🇿' },
        { name: 'Paraguay', emoji: '🇵🇾' },
        { name: 'Senegal', emoji: '🇸🇳' }
    ];
}

// Obtener el emoji de un equipo escaneando DEFAULT_MATCHES y GROUP_TEAM_MAPPING
function getTeamEmoji(teamName) {
    for (const key in GROUP_TEAM_MAPPING) {
        if (GROUP_TEAM_MAPPING[key].name === teamName) {
            return GROUP_TEAM_MAPPING[key].emoji;
        }
    }
    for (const match of DEFAULT_MATCHES) {
        if (match.team1 === teamName) return match.emoji1;
        if (match.team2 === teamName) return match.emoji2;
    }
    return '⚽';
}

// Obtener el nombre del ganador de una estructura que puede ser string u objeto
function getWinnerName(val) {
    if (!val) return null;
    if (typeof val === 'string') return val;
    return val.winner || null;
}

// Obtener el método de victoria (regular, extra, penalties)
function getWinnerMethod(val) {
    if (!val) return 'regular';
    if (typeof val === 'string') return 'regular';
    return val.method || 'regular';
}

// Validar y limpiar cascada de predicciones o resultados oficiales si los equipos cambiaron
function validateKnockoutPredictions(isOfficial) {
    if (isOfficial) return false; // El administrador controla los resultados oficiales de manera explícita en cascada, no limpiar en segundo plano
    const rounds = ['r32', 'r16', 'qf', 'sf', 'f'];
    const user = state.users ? state.users.find(u => u.id === state.currentUser) : null;
    
    let changed = false;

    rounds.forEach(roundKey => {
        const matches = KNOCKOUT_MATCHES[roundKey];
        matches.forEach((match, index) => {
            let team1, team2;
            
            if (roundKey === 'r32') {
                team1 = getTeamForKnockout(match.team1, true); // Siempre validar contra los resultados oficiales
                team2 = getTeamForKnockout(match.team2, true); // Siempre validar contra los resultados oficiales
            } else if (roundKey === 'r16') {
                if (isOfficial) {
                    team1 = getOfficialWinnerOfPreviousMatch('r32', index * 2) || { name: `Ganador Eliminatoria ${index * 2 + 1}` };
                    team2 = getOfficialWinnerOfPreviousMatch('r32', index * 2 + 1) || { name: `Ganador Eliminatoria ${index * 2 + 2}` };
                } else {
                    team1 = getWinnerOfPreviousMatch('r32', index * 2) || { name: `Ganador Eliminatoria ${index * 2 + 1}` };
                    team2 = getWinnerOfPreviousMatch('r32', index * 2 + 1) || { name: `Ganador Eliminatoria ${index * 2 + 2}` };
                }
            } else if (roundKey === 'qf') {
                if (isOfficial) {
                    team1 = getOfficialWinnerOfPreviousMatch('r16', index * 2) || { name: `Ganador Octavos ${index * 2 + 1}` };
                    team2 = getOfficialWinnerOfPreviousMatch('r16', index * 2 + 1) || { name: `Ganador Octavos ${index * 2 + 2}` };
                } else {
                    team1 = getWinnerOfPreviousMatch('r16', index * 2) || { name: `Ganador Octavos ${index * 2 + 1}` };
                    team2 = getWinnerOfPreviousMatch('r16', index * 2 + 1) || { name: `Ganador Octavos ${index * 2 + 2}` };
                }
            } else if (roundKey === 'sf') {
                if (isOfficial) {
                    team1 = getOfficialWinnerOfPreviousMatch('qf', index * 2) || { name: `Ganador Cuartos ${index * 2 + 1}` };
                    team2 = getOfficialWinnerOfPreviousMatch('qf', index * 2 + 1) || { name: `Ganador Cuartos ${index * 2 + 2}` };
                } else {
                    team1 = getWinnerOfPreviousMatch('qf', index * 2) || { name: `Ganador Cuartos ${index * 2 + 1}` };
                    team2 = getWinnerOfPreviousMatch('qf', index * 2 + 1) || { name: `Ganador Cuartos ${index * 2 + 2}` };
                }
            } else if (roundKey === 'f') {
                if (index === 0) {
                    if (isOfficial) {
                        team1 = getOfficialWinnerOfPreviousMatch('sf', 0) || { name: 'Finalista 1' };
                        team2 = getOfficialWinnerOfPreviousMatch('sf', 1) || { name: 'Finalista 2' };
                    } else {
                        team1 = getWinnerOfPreviousMatch('sf', 0) || { name: 'Finalista 1' };
                        team2 = getWinnerOfPreviousMatch('sf', 1) || { name: 'Finalista 2' };
                    }
                } else {
                    if (isOfficial) {
                        team1 = getOfficialLoserOfPreviousMatch('sf', 0) || { name: 'Perdedor Semifinal 1' };
                        team2 = getOfficialLoserOfPreviousMatch('sf', 1) || { name: 'Perdedor Semifinal 2' };
                    } else {
                        team1 = getLoserOfPreviousMatch('sf', 0) || { name: 'Perdedor Semifinal 1' };
                        team2 = getLoserOfPreviousMatch('sf', 1) || { name: 'Perdedor Semifinal 2' };
                    }
                }
            }

            if (isOfficial) {
                const officialVal = state.officialResults[match.id];
                const winnerName = getWinnerName(officialVal);
                if (winnerName && winnerName !== team1.name && winnerName !== team2.name) {
                    delete state.officialResults[match.id];
                    changed = true;
                }
            } else {
                if (user && user.knockoutWinner) {
                    const predictionVal = user.knockoutWinner[`${roundKey}_${index}`];
                    const winnerName = getWinnerName(predictionVal);
                    if (winnerName && winnerName !== team1.name && winnerName !== team2.name) {
                        delete user.knockoutWinner[`${roundKey}_${index}`];
                        changed = true;
                    }
                }
            }
        });
    });

    return changed;
}

// Obtener el ganador seleccionado de una llave anterior para poblar la siguiente ronda
function getWinnerOfPreviousMatch(roundKey, matchIndex) {
    const user = state.users.find(u => u.id === state.currentUser);
    if (!user.knockoutWinner) user.knockoutWinner = {};
    const val = user.knockoutWinner[`${roundKey}_${matchIndex}`];
    const winnerName = getWinnerName(val);
    if (!winnerName) return null;

    let emoji = getTeamEmoji(winnerName);
    return { name: winnerName, emoji };
}

// Obtener el perdedor de una semifinal para disputar el tercer puesto
function getLoserOfPreviousMatch(roundKey, matchIndex) {
    const user = state.users.find(u => u.id === state.currentUser);
    const val = user.knockoutWinner[`${roundKey}_${matchIndex}`];
    const winnerName = getWinnerName(val);
    if (!winnerName) return null;

    const matches = KNOCKOUT_MATCHES[roundKey];
    const match = matches[matchIndex];
    
    let team1 = getWinnerOfPreviousMatch('qf', matchIndex * 2) || { name: `Ganador Cuartos ${matchIndex * 2 + 1}`, emoji: '🏆' };
    let team2 = getWinnerOfPreviousMatch('qf', matchIndex * 2 + 1) || { name: `Ganador Cuartos ${matchIndex * 2 + 2}`, emoji: '🏆' };
    
    const loserName = (winnerName === team1.name) ? team2.name : team1.name;
    const loserEmoji = (winnerName === team1.name) ? team2.emoji : team1.emoji;
    
    return { name: loserName, emoji: loserEmoji };
}

// Guardar el ganador seleccionado por el usuario en el bracket
function selectKnockoutWinner(roundKey, matchIndex, teamName) {
    if (isKnockoutMatchLocked(roundKey, matchIndex)) return; // Bloquear si el partido ya empezó o está bloqueado
    const user = state.users.find(u => u.id === state.currentUser);
    if (user.isAdmin) return; // El administrador no realiza predicciones
    if (!teamName || teamName.includes('Ganador') || teamName.includes('Finalista')) return; // No permitir selecciones placeholders
    
    if (!user.knockoutWinner) user.knockoutWinner = {};
    
    // Si ya estaba seleccionado este equipo, deseleccionar
    const currentVal = user.knockoutWinner[`${roundKey}_${matchIndex}`];
    const currentWinner = getWinnerName(currentVal);
    const currentMethod = getWinnerMethod(currentVal);
    
    if (currentWinner === teamName) {
        delete user.knockoutWinner[`${roundKey}_${matchIndex}`];
        cleanSubsequentRounds(roundKey, matchIndex);
    } else {
        user.knockoutWinner[`${roundKey}_${matchIndex}`] = {
            winner: teamName,
            method: currentWinner ? currentMethod : 'regular'
        };
        // Limpiar predicciones de rondas siguientes si dependían de esta llave
        cleanSubsequentRounds(roundKey, matchIndex);
    }

    saveUsersToStorage();
    renderKnockoutMatches();
}

// Guardar el método de victoria seleccionado por el usuario
function selectKnockoutMethod(roundKey, matchIndex, method) {
    if (isKnockoutMatchLocked(roundKey, matchIndex)) return; // Bloquear si el partido ya empezó o está bloqueado
    const user = state.users.find(u => u.id === state.currentUser);
    if (user.isAdmin) return;
    
    const key = `${roundKey}_${matchIndex}`;
    const currentVal = user.knockoutWinner[key];
    const winnerName = getWinnerName(currentVal);
    if (!winnerName) return; // No puede seleccionar método si no hay ganador
    
    user.knockoutWinner[key] = {
        winner: winnerName,
        method: method
    };
    
    saveUsersToStorage();
    renderKnockoutMatches();
}

// Limpiar en cascada si se cambia un ganador del cual dependía el resto del bracket
function cleanSubsequentRounds(roundKey, matchIndex) {
    const user = state.users.find(u => u.id === state.currentUser);
    if (roundKey === 'r32') {
        const r16Index = Math.floor(matchIndex / 2);
        delete user.knockoutWinner[`r16_${r16Index}`];
        const qfIndex = Math.floor(r16Index / 2);
        delete user.knockoutWinner[`qf_${qfIndex}`];
        const sfIndex = Math.floor(qfIndex / 2);
        delete user.knockoutWinner[`sf_${sfIndex}`];
        delete user.knockoutWinner[`f_0`];
        delete user.knockoutWinner[`f_1`];
    } else if (roundKey === 'r16') {
        const qfIndex = Math.floor(matchIndex / 2);
        delete user.knockoutWinner[`qf_${qfIndex}`];
        const sfIndex = Math.floor(qfIndex / 2);
        delete user.knockoutWinner[`sf_${sfIndex}`];
        delete user.knockoutWinner[`f_0`];
        delete user.knockoutWinner[`f_1`];
    } else if (roundKey === 'qf') {
        const sfIndex = Math.floor(matchIndex / 2);
        delete user.knockoutWinner[`sf_${sfIndex}`];
        delete user.knockoutWinner[`f_0`];
        delete user.knockoutWinner[`f_1`];
    } else if (roundKey === 'sf') {
        delete user.knockoutWinner[`f_0`];
        delete user.knockoutWinner[`f_1`];
    }
}

// Alternar el modo de la tabla (Ronda 2 o Acumulada)
function toggleLeaderboardMode() {
    if (state.leaderboardMode === 'accumulated') {
        state.leaderboardMode = 'current';
    } else {
        state.leaderboardMode = 'accumulated';
    }
    localStorage.setItem('iesa_leaderboard_mode', state.leaderboardMode);
    renderLeaderboard();
}

// Renderizar la Tabla General de Posiciones (Leaderboard)
function renderLeaderboard() {
    const list = document.getElementById('leaderboardList');
    if (!list) return;
    list.innerHTML = '';

    const btn = document.getElementById('leaderboardToggleBtn');
    if (btn) {
        if (state.leaderboardMode === 'accumulated') {
            btn.textContent = 'Ver Tabla Ronda 3 (Actual)';
            btn.style.borderColor = 'var(--success-color)';
            btn.style.color = 'var(--success-color)';
        } else {
            btn.textContent = 'Ver Tabla GLOBAL';
            btn.style.borderColor = 'var(--primary-color)';
            btn.style.color = 'var(--primary-color)';
        }
    }

    // Obtener y ordenar usuarios
    const mode = state.leaderboardMode || 'current';
    const sortedUsers = [...state.users]
        .filter(u => u && !u.isAdmin)
        .map(u => {
            const r3 = u.totalPoints || 0;
            const r2 = ROUND_2_POINTS[u.id] || 0;
            const r1 = ROUND_1_POINTS[u.id] || 0;
            return {
                ...u,
                r1: r1,
                r2: r2,
                r3: r3,
                sortPoints: mode === 'accumulated' ? (r1 + r2 + r3) : r3
            };
        })
        .sort((a, b) => b.sortPoints - a.sortPoints);

    sortedUsers.forEach((user, index) => {
        const isSelf = user.id === state.currentUser;
        const currentRank = index + 1;
        const previousRank = user.previousRank;
        
        let rankTrendHtml = '';
        if (mode === 'current') {
            if (previousRank !== undefined && previousRank !== null) {
                if (currentRank < previousRank) {
                    // Subió de posición
                    rankTrendHtml = `<span class="rank-trend up" style="color: var(--success-color); font-weight: 700; font-size: 0.65rem; margin-top: 2px;">▲${previousRank - currentRank}</span>`;
                } else if (currentRank > previousRank) {
                    // Bajó de posición
                    rankTrendHtml = `<span class="rank-trend down" style="color: var(--primary-color); font-weight: 700; font-size: 0.65rem; margin-top: 2px;">▼${currentRank - previousRank}</span>`;
                } else {
                    // Se mantuvo igual
                    rankTrendHtml = `<span class="rank-trend same" style="color: var(--text-muted); font-weight: 700; font-size: 0.65rem; margin-top: 2px;">•</span>`;
                }
            } else {
                // Sin historial de ranking
                rankTrendHtml = `<span class="rank-trend same" style="color: var(--text-muted); font-weight: 700; font-size: 0.65rem; margin-top: 2px;">•</span>`;
            }
        }
        
        let trophy = '';
        if (index === 0) trophy = '👑 ';

        let logoHtml = '';
        if (user.favoriteTeam && TEAM_LOGOS[user.favoriteTeam]) {
            logoHtml = `<img src="${TEAM_LOGOS[user.favoriteTeam]}" alt="${user.favoriteTeam}" title="${user.favoriteTeam}" class="leaderboard-team-logo" style="width: 18px; height: 18px; object-fit: contain; vertical-align: middle; margin-left: 4px; border-radius: 2px;" />`;
        }

        const pointsBadgeHtml = mode === 'accumulated' 
            ? `<div class="user-points-badge" style="text-align: right; line-height: 1.2; background: rgba(0, 226, 26, 0.05); border-color: rgba(0, 226, 26, 0.2); height: auto; padding: 4px 8px;">
                <span style="font-weight: 800; display: block; font-size: 0.95rem; color: var(--success-color);">${user.sortPoints} Pts</span>
                <span style="font-size: 0.65rem; color: var(--text-muted); display: block; font-weight: 500;">R1:${user.r1} + R2:${user.r2} + R3:${user.r3}</span>
               </div>`
            : `<div class="user-points-badge">${user.sortPoints} Pts</div>`;

        const item = document.createElement('div');
        item.className = `leaderboard-item ${isSelf ? 'current-user' : ''}`;
        item.innerHTML = `
            <div class="rank-number" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 32px; text-align: center; gap: 1px;">
                <span style="font-weight: 800; font-size: 1rem; color: var(--text-primary);">${currentRank}</span>
                ${rankTrendHtml}
            </div>
            <div class="user-info">
                <span class="user-name" style="display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
                    <span>${trophy}${user.name}</span>
                    ${logoHtml}
                </span>
                <span class="user-dept">${user.dept}</span>
            </div>
            ${pointsBadgeHtml}
        `;
        list.appendChild(item);
    });
}

// Renderizar el Panel del Administrador
function renderAdminMatches() {
    // Validar antes de renderizar
    const officialChanged = validateKnockoutPredictions(true);
    if (officialChanged) {
        saveOfficialResultsToStorage();
    }

    const list = document.getElementById('adminMatchesList');
    list.innerHTML = '';

    const adminGroupsNav = document.getElementById('adminGroupsNav');
    const adminGroupTitle = document.getElementById('adminGroupTitle');

    const phase = state.adminPhase || 'groups';

    if (phase === 'groups') {
        // Mostrar navegación de grupos y título de grupos
        if (adminGroupsNav) adminGroupsNav.style.display = 'flex';
        if (adminGroupTitle) {
            adminGroupTitle.style.display = 'block';
            adminGroupTitle.innerHTML = `Grupo ${state.currentGroup} <span>Resultados Oficiales</span>`;
        }

        const groupMatches = DEFAULT_MATCHES.filter(m => m.group === state.currentGroup);
        
        groupMatches.forEach(match => {
            const official = state.officialResults[match.id] || { score1: null, score2: null };
            const isDefined = official.score1 !== null && official.score2 !== null;
            const badgeClass = isDefined ? 'status-filled' : 'status-pending';
            const badgeText = isDefined ? 'Definido' : 'Sin definir';
            
            const card = document.createElement('div');
            card.className = 'match-card';
            card.innerHTML = `
                <div class="match-header">
                    <span>${match.date} (${match.time || '18:00'})</span>
                    <span class="match-status-badge ${badgeClass}">${badgeText}</span>
                </div>
                <div class="match-body">
                    <div class="team-container">
                        <div class="team-flag-card">${match.emoji1}</div>
                        <span class="team-name">${match.team1}</span>
                    </div>
                    
                    <div class="score-selector">
                        <input type="number" min="0" class="score-input-direct" value="${official.score1 !== null ? official.score1 : ''}" placeholder="-" oninput="saveDirectOfficialScore('${match.id}', 1, this.value)">
                        <span class="score-separator">vs</span>
                        <input type="number" min="0" class="score-input-direct" value="${official.score2 !== null ? official.score2 : ''}" placeholder="-" oninput="saveDirectOfficialScore('${match.id}', 2, this.value)">
                    </div>

                    <div class="team-container">
                        <div class="team-flag-card">${match.emoji2}</div>
                        <span class="team-name">${match.team2}</span>
                    </div>
                </div>
            `;
            list.appendChild(card);
        });
    } else if (phase === 'users_predictions') {
        // Ocultar navegación de grupos
        if (adminGroupsNav) adminGroupsNav.style.display = 'none';
        if (adminGroupTitle) {
            adminGroupTitle.style.display = 'block';
            adminGroupTitle.innerHTML = `Estatus de Pronósticos <span>Administrador</span>`;
        }

        const regularUsers = state.users.filter(u => !u.isAdmin);

        if (regularUsers.length === 0) {
            list.innerHTML = `<div style="text-align:center; padding:20px; color:var(--text-secondary);">No hay usuarios registrados.</div>`;
            return;
        }

        // Listas categorizadas por completitud
        const completados = [];
        const incompletos = [];
        const sinIniciar = [];

        regularUsers.forEach(u => {
            const groupPredCount = DEFAULT_MATCHES.filter(m => u.predictions && u.predictions[m.id] && u.predictions[m.id].score1 !== null && u.predictions[m.id].score2 !== null).length;
            const knockoutPredCount = Object.keys(u.knockoutWinner || {}).length;

            const userData = {
                user: u,
                groupPredCount,
                knockoutPredCount,
                isComplete: (groupPredCount === DEFAULT_MATCHES.length && knockoutPredCount === 32),
                isNotStarted: (groupPredCount === 0 && knockoutPredCount === 0)
            };

            if (userData.isComplete) {
                completados.push(userData);
            } else if (userData.isNotStarted) {
                sinIniciar.push(userData);
            } else {
                incompletos.push(userData);
            }
        });

        // Crear contenedor para las tarjetas de estadísticas resumidas
        const statsDashboard = document.createElement('div');
        statsDashboard.style.display = 'grid';
        statsDashboard.style.gridTemplateColumns = 'repeat(3, 1fr)';
        statsDashboard.style.gap = '10px';
        statsDashboard.style.marginBottom = '20px';
        statsDashboard.innerHTML = `
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; padding: 10px; text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 800; color: var(--success-color);">${completados.length}</div>
                <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700;">Completos</div>
            </div>
            <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 12px; padding: 10px; text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 800; color: var(--warning-color);">${incompletos.length}</div>
                <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700;">Incompletos</div>
            </div>
            <div style="background: rgba(226, 0, 26, 0.1); border: 1px solid rgba(226, 0, 26, 0.2); border-radius: 12px; padding: 10px; text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary-color);">${sinIniciar.length}</div>
                <div style="font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700;">Sin Iniciar</div>
            </div>
        `;
        list.appendChild(statsDashboard);

        // Función auxiliar para renderizar un grupo de usuarios
        const renderUserGroup = (title, items, colorClass, statusLabel) => {
            const sectionHeader = document.createElement('h3');
            sectionHeader.className = 'section-title';
            sectionHeader.innerHTML = `${title} <span>(${items.length})</span>`;
            list.appendChild(sectionHeader);

            if (items.length === 0) {
                const emptyMsg = document.createElement('div');
                emptyMsg.style.fontSize = '0.85rem';
                emptyMsg.style.color = 'var(--text-muted)';
                emptyMsg.style.padding = '8px 16px';
                emptyMsg.style.background = 'rgba(255, 255, 255, 0.01)';
                emptyMsg.style.borderRadius = '8px';
                emptyMsg.style.marginBottom = '12px';
                emptyMsg.textContent = 'Ninguno en esta categoría';
                list.appendChild(emptyMsg);
                return;
            }

            items.forEach(item => {
                const u = item.user;
                const userCard = document.createElement('div');
                userCard.className = 'match-card';
                userCard.style.flexDirection = 'column';
                userCard.style.gap = '8px';

                // Generar detalles de pronósticos
                let detailsHtml = '';
                detailsHtml += `<div class="user-pred-details" id="details-${u.id}" style="display:none; margin-top:12px; border-top:1px solid var(--border-color); padding-top:12px; font-size:0.85rem; max-height: 300px; overflow-y: auto;">`;

                detailsHtml += `<div style="font-weight:700; color:var(--primary-color); margin-bottom:8px;">Fase de Grupos (${item.groupPredCount}/${DEFAULT_MATCHES.length}):</div>`;
                if (item.groupPredCount === 0) {
                    detailsHtml += `<div style="color:var(--text-muted); margin-bottom:12px;">Sin pronósticos guardados en grupos.</div>`;
                } else {
                    detailsHtml += `<div style="display:grid; grid-template-columns: 1fr 1fr; gap:6px; margin-bottom:12px;">`;
                    DEFAULT_MATCHES.forEach(m => {
                        const p = u.predictions[m.id];
                        if (p && p.score1 !== null && p.score2 !== null) {
                            detailsHtml += `<div style="background:rgba(255,255,255,0.02); padding:4px 8px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
                                <span>${m.emoji1} ${m.team1.substring(0,3)} vs ${m.team2.substring(0,3)} ${m.emoji2}</span>
                                <strong style="color:var(--success-color);">${p.score1} - ${p.score2}</strong>
                            </div>`;
                        }
                    });
                    detailsHtml += `</div>`;
                }

                detailsHtml += `<div style="font-weight:700; color:var(--primary-color); margin-bottom:8px;">Fase Final (${item.knockoutPredCount}/32):</div>`;
                if (item.knockoutPredCount === 0) {
                    detailsHtml += `<div style="color:var(--text-muted);">Sin pronósticos de fase final.</div>`;
                } else {
                    detailsHtml += `<div style="display:grid; grid-template-columns: 1fr; gap:6px;">`;
                    const roundLabels = { r32: 'Eliminatoria 32', r16: 'Octavos', qf: 'Cuartos', sf: 'Semis', f: 'Finales' };
                    for (const key in u.knockoutWinner) {
                        const [round, matchIdx] = key.split('_');
                        const winner = u.knockoutWinner[key];
                        const roundName = roundLabels[round] || round;
                        detailsHtml += `<div style="background:rgba(255,255,255,0.02); padding:4px 8px; border-radius:6px; display:flex; justify-content:space-between;">
                            <span style="color:var(--text-secondary);">${roundName} (Llave ${parseInt(matchIdx)+1})</span>
                            <strong style="color:var(--success-color);">${getTeamEmoji(winner)} ${winner}</strong>
                        </div>`;
                    }
                    detailsHtml += `</div>`;
                }

                detailsHtml += `</div>`;

                userCard.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <strong style="font-size:1rem; color:var(--text-primary);">${u.name}</strong>
                            <div style="font-size:0.75rem; color:var(--text-secondary);">${u.dept}</div>
                        </div>
                        <div style="text-align:right;">
                            <span class="match-status-badge ${colorClass}" style="display:inline-block; margin-bottom:4px;">${statusLabel}</span>
                            <div style="font-size:0.75rem; color:var(--text-secondary);">Grupos: ${item.groupPredCount}/${DEFAULT_MATCHES.length}</div>
                            <div style="font-size:0.75rem; color:var(--text-secondary);">Finales: ${item.knockoutPredCount}/32</div>
                        </div>
                    </div>
                    <div style="display:flex; justify-content:flex-end; margin-top:8px;">
                        <button class="btn btn-secondary btn-sm" onclick="toggleUserPredDetails('${u.id}', this)" style="padding:4px 10px; font-size:0.75rem;">Ver Pronósticos 🔽</button>
                    </div>
                    ${detailsHtml}
                `;
                list.appendChild(userCard);
            });
        };

        // Renderizar las categorías (Sin Iniciar arriba para llamar su atención, luego Incompletos y por último Completos)
        renderUserGroup('🔴 Sin Iniciar Pronósticos', sinIniciar, 'status-pending', 'Sin Iniciar');
        renderUserGroup('🟡 Pronósticos Incompletos', incompletos, 'status-pending', 'Incompleto');
        renderUserGroup('🟢 Pronósticos Completados', completados, 'status-filled', 'Completo');
    } else {
        // Ocultar navegación de grupos
        if (adminGroupsNav) adminGroupsNav.style.display = 'none';
        
        let roundTitle = '';
        if (phase === 'r32') roundTitle = 'Dieciseisavos de final';
        else if (phase === 'r16') roundTitle = 'Octavos de final';
        else if (phase === 'qf') roundTitle = 'Cuartos de final';
        else if (phase === 'sf') roundTitle = 'Semifinales';
        else if (phase === 'f') roundTitle = 'Finales y Tercer Puesto';

        if (adminGroupTitle) {
            adminGroupTitle.style.display = 'block';
            adminGroupTitle.innerHTML = `${roundTitle} <span>Resultados Oficiales</span>`;
        }

        const matches = KNOCKOUT_MATCHES[phase];

        matches.forEach((match, index) => {
            let team1 = getTeamForKnockout(match.team1, true);
            let team2 = getTeamForKnockout(match.team2, true);

            if (phase === 'r16') {
                team1 = getOfficialWinnerOfPreviousMatch('r32', index * 2) || { name: `Ganador Eliminatoria ${index * 2 + 1}`, emoji: '🏆' };
                team2 = getOfficialWinnerOfPreviousMatch('r32', index * 2 + 1) || { name: `Ganador Eliminatoria ${index * 2 + 2}`, emoji: '🏆' };
            } else if (phase === 'qf') {
                team1 = getOfficialWinnerOfPreviousMatch('r16', index * 2) || { name: `Ganador Octavos ${index * 2 + 1}`, emoji: '🏆' };
                team2 = getOfficialWinnerOfPreviousMatch('r16', index * 2 + 1) || { name: `Ganador Octavos ${index * 2 + 2}`, emoji: '🏆' };
            } else if (phase === 'sf') {
                team1 = getOfficialWinnerOfPreviousMatch('qf', index * 2) || { name: `Ganador Cuartos ${index * 2 + 1}`, emoji: '🏆' };
                team2 = getOfficialWinnerOfPreviousMatch('qf', index * 2 + 1) || { name: `Ganador Cuartos ${index * 2 + 2}`, emoji: '🏆' };
            } else if (phase === 'f') {
                if (index === 0) {
                    team1 = getOfficialWinnerOfPreviousMatch('sf', 0) || { name: 'Finalista 1', emoji: '🏆' };
                    team2 = getOfficialWinnerOfPreviousMatch('sf', 1) || { name: 'Finalista 2', emoji: '🏆' };
                } else {
                    team1 = getOfficialLoserOfPreviousMatch('sf', 0) || { name: 'Perdedor Semifinal 1', emoji: '🥉' };
                    team2 = getOfficialLoserOfPreviousMatch('sf', 1) || { name: 'Perdedor Semifinal 2', emoji: '🥉' };
                }
            }

            const officialVal = state.officialResults[match.id];
            const officialWinner = getWinnerName(officialVal);
            const officialMethod = getWinnerMethod(officialVal);
            
            const isKnockoutDefined = !!officialWinner;
            const knockoutBadgeClass = isKnockoutDefined ? 'status-filled' : 'status-pending';
            const knockoutBadgeText = isKnockoutDefined ? 'Definido' : 'Sin definir';

            let methodSelectorHtml = '';
            if (officialWinner) {
                methodSelectorHtml = `
                    <div style="margin-top: 8px; border-top: 1px dashed var(--border-color); padding-top: 8px; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                        <span style="font-size: 0.7rem; color: var(--text-secondary); font-weight: 500;">Método oficial de victoria:</span>
                        <select class="form-input" style="font-size: 0.75rem; padding: 2px 6px; border-radius: 6px; border: 1px solid var(--border-color); background: rgba(255,255,255,0.05); color: var(--text-primary); cursor: pointer; outline: none; width: auto; font-weight: 600;" onchange="setOfficialKnockoutMethod('${match.id}', this.value)">
                            <option value="regular" ${officialMethod === 'regular' ? 'selected' : ''}>Fase Regular</option>
                            <option value="extra" ${officialMethod === 'extra' ? 'selected' : ''}>Tiempos extra</option>
                            <option value="penalties" ${officialMethod === 'penalties' ? 'selected' : ''}>Penales</option>
                        </select>
                    </div>
                `;
            }

            const card = document.createElement('div');
            card.className = 'match-card';
            card.innerHTML = `
                <div class="match-header">
                    <span>${match.label}</span>
                    <span class="match-status-badge ${knockoutBadgeClass}">${knockoutBadgeText}</span>
                </div>
                <div style="display:flex; flex-direction:column; gap:8px; margin-top:6px;">
                    <div class="bracket-team-row ${officialWinner === team1.name ? 'selected-winner' : ''}" onclick="setOfficialKnockoutWinner('${match.id}', '${team1.name}')">
                        <div class="bracket-team-info">
                            <span>${team1.emoji}</span>
                            <span>${team1.name}</span>
                        </div>
                        <span class="bracket-team-winner-indicator">✔ Oficial</span>
                    </div>
                    <div class="bracket-team-row ${officialWinner === team2.name ? 'selected-winner' : ''}" onclick="setOfficialKnockoutWinner('${match.id}', '${team2.name}')">
                        <div class="bracket-team-info">
                            <span>${team2.emoji}</span>
                            <span>${team2.name}</span>
                        </div>
                        <span class="bracket-team-winner-indicator">✔ Oficial</span>
                    </div>
                </div>
                ${methodSelectorHtml}
            `;
            list.appendChild(card);
        });
    }
}

// Obtener ganador de ronda anterior oficial
function getOfficialWinnerOfPreviousMatch(roundKey, matchIndex) {
    const val = state.officialResults[`${roundKey.toUpperCase()}_${matchIndex + 1}`];
    const winnerName = getWinnerName(val);
    if (!winnerName) return null;

    let emoji = getTeamEmoji(winnerName);
    return { name: winnerName, emoji };
}

// Obtener perdedor de ronda anterior oficial
function getOfficialLoserOfPreviousMatch(roundKey, matchIndex) {
    const val = state.officialResults[`${roundKey.toUpperCase()}_${matchIndex + 1}`];
    const winnerName = getWinnerName(val);
    if (!winnerName) return null;

    const matches = KNOCKOUT_MATCHES[roundKey];
    const match = matches[matchIndex];
    
    let team1 = getOfficialWinnerOfPreviousMatch('qf', matchIndex * 2) || { name: `Ganador Cuartos ${matchIndex * 2 + 1}`, emoji: '🏆' };
    let team2 = getOfficialWinnerOfPreviousMatch('qf', matchIndex * 2 + 1) || { name: `Ganador Cuartos ${matchIndex * 2 + 2}`, emoji: '🏆' };
    
    const loserName = (winnerName === team1.name) ? team2.name : team1.name;
    const loserEmoji = (winnerName === team1.name) ? team2.emoji : team1.emoji;
    return { name: loserName, emoji: loserEmoji };
}

// Modificar Marcador Oficial (Simulado por el admin)
function adjustOfficialScore(matchId, teamIndex, delta) {
    if (!state.officialResults[matchId]) {
        state.officialResults[matchId] = { score1: 0, score2: 0 };
    }

    const official = state.officialResults[matchId];
    if (teamIndex === 1) {
        const current = official.score1 !== null ? official.score1 : 0;
        official.score1 = Math.max(0, current + delta);
    } else {
        const current = official.score2 !== null ? official.score2 : 0;
        official.score2 = Math.max(0, current + delta);
    }

    saveOfficialResultsToStorage();
    calculateAllPointsAdminChange();
    renderAdminMatches();
}

// Guardar Ganador Oficial de la Fase Final en el Administrador
function setOfficialKnockoutWinner(matchId, teamName) {
    const [roundPrefix, indexStr] = matchId.split('_');
    const roundKey = roundPrefix.toLowerCase();
    const matchIndex = parseInt(indexStr) - 1;

    const currentVal = state.officialResults[matchId];
    const currentWinner = getWinnerName(currentVal);
    const currentMethod = getWinnerMethod(currentVal);

    if (currentWinner === teamName) {
        delete state.officialResults[matchId];
    } else {
        state.officialResults[matchId] = {
            winner: teamName,
            method: currentWinner ? currentMethod : 'regular'
        };
    }
    
    cleanSubsequentOfficialRounds(roundKey, matchIndex);
    
    saveOfficialResultsToStorage();
    calculateAllPointsAdminChange();
    renderAdminMatches();
}

// Guardar el método de victoria oficial en el Administrador
function setOfficialKnockoutMethod(matchId, method) {
    const currentVal = state.officialResults[matchId];
    const winnerName = getWinnerName(currentVal);
    if (!winnerName) return;

    state.officialResults[matchId] = {
        winner: winnerName,
        method: method
    };

    saveOfficialResultsToStorage();
    calculateAllPointsAdminChange();
    renderAdminMatches();
}

// Limpiar resultados oficiales en cascada si se cambia un ganador oficial
function cleanSubsequentOfficialRounds(roundKey, matchIndex) {
    if (roundKey === 'r32') {
        const r16Index = Math.floor(matchIndex / 2);
        delete state.officialResults[`R16_${r16Index + 1}`];
        const qfIndex = Math.floor(r16Index / 2);
        delete state.officialResults[`QF_${qfIndex + 1}`];
        const sfIndex = Math.floor(qfIndex / 2);
        delete state.officialResults[`SF_${sfIndex + 1}`];
        delete state.officialResults[`F_1`];
        delete state.officialResults[`F_2`];
    } else if (roundKey === 'r16') {
        const qfIndex = Math.floor(matchIndex / 2);
        delete state.officialResults[`QF_${qfIndex + 1}`];
        const sfIndex = Math.floor(qfIndex / 2);
        delete state.officialResults[`SF_${sfIndex + 1}`];
        delete state.officialResults[`F_1`];
        delete state.officialResults[`F_2`];
    } else if (roundKey === 'qf') {
        const sfIndex = Math.floor(matchIndex / 2);
        delete state.officialResults[`SF_${sfIndex + 1}`];
        delete state.officialResults[`F_1`];
        delete state.officialResults[`F_2`];
    } else if (roundKey === 'sf') {
        delete state.officialResults[`F_1`];
        delete state.officialResults[`F_2`];
    }
}

// ----------------------------------------------------
// MOTOR DE PUNTOS
// ----------------------------------------------------

// Calcular los puntos de un partido individual
function calculateMatchPoints(prediction, official) {
    if (prediction.score1 === null || prediction.score2 === null) return 0;
    if (official.score1 === null || official.score2 === null) return 0;

    const pred1 = parseInt(prediction.score1);
    const pred2 = parseInt(prediction.score2);
    const real1 = parseInt(official.score1);
    const real2 = parseInt(official.score2);

    // 1. Acierto Exacto (+5 puntos)
    if (pred1 === real1 && pred2 === real2) {
        return 5;
    }

    // 2. Acierto Tendencia (Ganador o empate) (+3 puntos)
    const predTrend = pred1 > pred2 ? 1 : (pred1 < pred2 ? -1 : 0);
    const realTrend = real1 > real2 ? 1 : (real1 < real2 ? -1 : 0);

    if (predTrend === realTrend) {
        return 3;
    }

    return 0;
}

// Calcular puntos totales de todos los usuarios (sin modificar la tendencia de posiciones guardada)
function calculateAllPoints() {
    state.users.forEach(user => {
        let total = 0;

        // Puntos por Fase Final (Acierto de clasificados / ganadores en llave)
        for (const key in user.knockoutWinner) {
            const predictedWinner = user.knockoutWinner[key];
            const predName = getWinnerName(predictedWinner);
            const predMethod = getWinnerMethod(predictedWinner);
            
            // Extraer la llave asociada en officialResults
            // La key del usuario es 'r16_0', 'r16_1', etc. Mapeamos a 'R16_1', 'R16_2'
            const [round, indexStr] = key.split('_');
            const index = parseInt(indexStr);
            const matchId = `${round.toUpperCase()}_${index + 1}`;

            const officialWinner = state.officialResults[matchId];
            const realName = getWinnerName(officialWinner);
            const realMethod = getWinnerMethod(officialWinner);

            if (realName && predName === realName) {
                total += 3; // +3 Pts por acertar al ganador
                if (predMethod === realMethod) {
                    total += 2; // +2 Pts por acertar al método de victoria
                }
            }
        }

        user.totalPoints = total;
    });

    // Guardar los puntos actualizados
    saveUsersToStorage();
}

// Calcular puntos totales y actualizar el ranking anterior (solo al cambiar resultados oficiales)
function calculateAllPointsAdminChange() {
    // 1. Obtener la posición actual antes de recalcular (que pasará a ser la anterior)
    const currentRanking = [...state.users]
        .filter(u => u && !u.isAdmin)
        .sort((a, b) => (b.totalPoints || 0) - (a.totalPoints || 0));

    // Asignar el ranking anterior
    state.users.forEach(user => {
        if (user && !user.isAdmin) {
            const prevRankIndex = currentRanking.findIndex(u => u.id === user.id);
            if (user.totalPoints !== undefined && prevRankIndex !== -1) {
                user.previousRank = prevRankIndex + 1;
            }
        }
    });

    // 2. Recalcular puntos
    state.users.forEach(user => {
        let total = 0;

        // Puntos por Fase Final (Acierto de clasificados / ganadores en llave)
        for (const key in user.knockoutWinner) {
            const predictedWinner = user.knockoutWinner[key];
            const predName = getWinnerName(predictedWinner);
            const predMethod = getWinnerMethod(predictedWinner);
            
            // Extraer la llave asociada en officialResults
            const [round, indexStr] = key.split('_');
            const index = parseInt(indexStr);
            const matchId = `${round.toUpperCase()}_${index + 1}`;

            const officialWinner = state.officialResults[matchId];
            const realName = getWinnerName(officialWinner);
            const realMethod = getWinnerMethod(officialWinner);

            if (realName && predName === realName) {
                total += 3; // +3 Pts por acertar al ganador
                if (predMethod === realMethod) {
                    total += 2; // +2 Pts por acertar al método de victoria
                }
            }
        }

        user.totalPoints = total;
    });

    // Guardar los puntos y la tendencia en Firebase
    saveUsersToStorage();
}

// ----------------------------------------------------
// MODAL DE ADMINISTRACIÓN DE USUARIOS
// ----------------------------------------------------
// ----------------------------------------------------
// GESTIÓN DE ACCESO INDEPENDIENTE (LOGIN / REGISTRO)
// ----------------------------------------------------
function switchLoginTab(tabType) {
    const tabSignin = document.getElementById('tab-signin');
    const tabSignup = document.getElementById('tab-signup');
    const formSignin = document.getElementById('form-signin');
    const formSignup = document.getElementById('form-signup');
    
    if (tabSignin && tabSignup && formSignin && formSignup) {
        if (tabType === 'signin') {
            tabSignin.classList.add('active');
            tabSignup.classList.remove('active');
            formSignin.classList.add('active');
            formSignup.classList.remove('active');
        } else {
            tabSignup.classList.add('active');
            tabSignin.classList.remove('active');
            formSignup.classList.add('active');
            formSignin.classList.remove('active');
        }
    }
}

function populateLoginUsers() {
    const select = document.getElementById('loginUserSelect');
    if (!select) return;
    select.innerHTML = '';
    
    // Ordenar usuarios alfabéticamente
    const sortedUsers = [...state.users].sort((a, b) => a.name.localeCompare(b.name));
    sortedUsers.forEach(u => {
        const option = document.createElement('option');
        option.value = u.id;
        option.textContent = `${u.name} (${u.dept})`;
        select.appendChild(option);
    });
}

function submitLogin() {
    const select = document.getElementById('loginUserSelect');
    const passwordInput = document.getElementById('loginPasswordInput');
    const errorMsg = document.getElementById('loginErrorMsg');
    
    if (!select || !passwordInput) return;
    
    const userId = select.value;
    const password = passwordInput.value;
    
    const user = state.users.find(u => u.id === userId);
    if (!user) return;
    
    const expectedPassword = user.password || '1234';
    if (password !== expectedPassword) {
        if (errorMsg) errorMsg.style.display = 'block';
        return;
    }
    
    if (errorMsg) errorMsg.style.display = 'none';
    passwordInput.value = '';
    
    state.currentUser = userId;
    localStorage.setItem('iesa_current_user', userId);
    
    switchPage('profile');
}

async function submitRegister() {
    const nameInput = document.getElementById('registerNameInput');
    const deptInput = document.getElementById('registerDeptInput');
    const passwordInput = document.getElementById('registerPasswordInput');
    const errorMsg = document.getElementById('registerErrorMsg');
    const registerBtn = document.querySelector('#form-signup .btn-primary');
    
    if (!nameInput || !deptInput || !passwordInput) return;
    
    const name = nameInput.value.trim();
    const dept = deptInput.value.trim() || 'General';
    const password = passwordInput.value.trim();
    
    if (!name || !password) {
        if (errorMsg) errorMsg.style.display = 'block';
        return;
    }
    
    if (errorMsg) errorMsg.style.display = 'none';
    
    // Deshabilitar botón para evitar doble click y envíos duplicados
    if (registerBtn) {
        registerBtn.disabled = true;
        registerBtn.textContent = 'Registrando...';
    }
    
    try {
        // Consultar la base de datos para obtener los perfiles reales actualizados
        const response = await fetch('https://quiniela-7fd9f-default-rtdb.firebaseio.com/users.json');
        const latestUsersObj = await response.json();
        const latestUsers = latestUsersObj 
            ? (Array.isArray(latestUsersObj) ? latestUsersObj.filter(Boolean) : Object.values(latestUsersObj))
            : [];
        
        // Verificar duplicados contra la lista real actualizada
        const exists = latestUsers.find(u => u && u.name && u.name.trim().toLowerCase() === name.toLowerCase());
        if (exists) {
            alert("Ya existe un perfil registrado con ese nombre.");
            return;
        }
        
        const newUser = {
            id: 'u_' + Date.now(),
            name: name,
            dept: dept,
            password: password,
            predictions: {},
            knockoutWinner: {}
        };
        
        // Agregar al listado local y guardar solo el registro individual
        state.users = latestUsers;
        state.users.push(newUser);
        state.currentUser = newUser.id;
        localStorage.setItem('iesa_current_user', newUser.id);
        
        nameInput.value = '';
        deptInput.value = '';
        passwordInput.value = '';
        
        await saveUserRecord(newUser);
        switchPage('profile');
    } catch (error) {
        console.error("Error al registrar:", error);
        alert("Hubo un error al registrar tu perfil. Por favor intenta de nuevo.");
    } finally {
        if (registerBtn) {
            registerBtn.disabled = false;
            registerBtn.textContent = 'Registrarse e Ingresar';
        }
    }
}

function logout() {
    state.currentUser = null;
    localStorage.removeItem('iesa_current_user');
    switchPage('login');
}

let autosaveTimeout = null;

// Guardar marcador del pronóstico de forma directa en el estado local
function saveDirectPrediction(matchId, teamIndex, value) {
    const user = state.users.find(u => u.id === state.currentUser);
    if (!user || user.isAdmin) return;
    if (isMatchLocked(matchId)) return; // Evitar guardar si está bloqueada la fase de grupos para este partido
    
    if (!user.predictions[matchId]) {
        user.predictions[matchId] = { score1: null, score2: null };
    }
    
    const parsedVal = value === '' ? null : parseInt(value);
    
    if (teamIndex === 1) {
        user.predictions[matchId].score1 = parsedVal;
    } else {
        user.predictions[matchId].score2 = parsedVal;
    }
    
    // Actualizar badge sin refrescar todo
    const card = document.querySelector(`[data-match-id="${matchId}"]`);
    if (card) {
        const statusBadge = card.querySelector('.match-status-badge');
        if (statusBadge) {
            const pred = user.predictions[matchId];
            if (pred.score1 !== null && pred.score2 !== null) {
                statusBadge.className = 'match-status-badge status-filled';
                statusBadge.textContent = 'Pronosticado';
            } else {
                statusBadge.className = 'match-status-badge status-pending';
                statusBadge.textContent = 'Pendiente';
            }
        }
    }
    
    // Actualizar stats de forma local
    const predictedGroupsCount = DEFAULT_MATCHES.filter(m => user.predictions[m.id] && user.predictions[m.id].score1 !== null && user.predictions[m.id].score2 !== null).length;
    const profileMatchesPredicted = document.getElementById('profileMatchesPredicted');
    if (profileMatchesPredicted) {
        profileMatchesPredicted.textContent = `${predictedGroupsCount}/${DEFAULT_MATCHES.length}`;
    }

    // AUTO-GUARDADO DE CORTO PLAZO (Debounce de 800ms)
    const saveBtn = document.getElementById('headerSavePredictionsBtn');
    if (saveBtn) {
        saveBtn.textContent = '⏳';
        saveBtn.style.opacity = '0.7';
    }
    
    if (autosaveTimeout) clearTimeout(autosaveTimeout);
    autosaveTimeout = setTimeout(async () => {
        try {
            await saveUsersToStorage();
            if (saveBtn) {
                saveBtn.textContent = '✅';
                setTimeout(() => {
                    if (saveBtn && saveBtn.textContent === '✅') {
                        saveBtn.textContent = '💾';
                        saveBtn.style.opacity = '1';
                    }
                }, 2000);
            }
        } catch (e) {
            console.error("Error al auto-guardar en Firebase:", e);
            if (saveBtn) {
                saveBtn.textContent = '❌';
            }
        }
    }, 800);
}

// Guardar todos los pronósticos modificados en Firebase
async function saveAllPredictions() {
    const saveBtn = document.getElementById('headerSavePredictionsBtn');
    if (saveBtn) {
        saveBtn.disabled = true;
        saveBtn.textContent = '⏳';
        saveBtn.style.opacity = '0.5';
    }
    
    try {
        await saveUsersToStorage();
        alert("¡Tus pronósticos se han guardado exitosamente!");
    } catch (error) {
        console.error("Error al guardar pronósticos:", error);
        alert("Hubo un error de conexión al guardar. Por favor intenta de nuevo.");
    } finally {
        if (saveBtn) {
            saveBtn.disabled = false;
            saveBtn.textContent = '💾';
            saveBtn.style.opacity = '1';
        }
    }
}

// Guardar marcador oficial de forma directa
function saveDirectOfficialScore(matchId, teamIndex, value) {
    if (!state.officialResults[matchId]) {
        state.officialResults[matchId] = { score1: null, score2: null };
    }
    
    const parsedVal = value === '' ? null : parseInt(value);
    
    if (teamIndex === 1) {
        state.officialResults[matchId].score1 = parsedVal;
    } else {
        state.officialResults[matchId].score2 = parsedVal;
    }
    
    saveOfficialResultsToStorage();
    calculateAllPointsAdminChange();
}

async function resetOfficialResults() {
    if (confirm("¿Estás seguro de que deseas restablecer todos los resultados oficiales? Esto borrará todos los marcadores reales de grupos y ganadores de llaves.")) {
        state.officialResults = {};
        await saveOfficialResultsToStorage();
        calculateAllPointsAdminChange();
        renderAll();
    }
}

// ----------------------------------------------------
// GESTIÓN DE TEMAS (CLARO / OSCURO)
// ----------------------------------------------------
function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('iesa_theme', isLight ? 'light' : 'dark');
    updateThemeToggleBtn();
}

function updateThemeToggleBtn() {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        const isLight = document.body.classList.contains('light-theme');
        btn.textContent = isLight ? '🌙' : '☀️';
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('iesa_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
    updateThemeToggleBtn();
}

function toggleUserPredDetails(userId, btn) {
    const details = document.getElementById(`details-${userId}`);
    if (details) {
        const isHidden = details.style.display === 'none';
        details.style.display = isHidden ? 'block' : 'none';
        btn.innerHTML = isHidden ? 'Ocultar Pronósticos 🔼' : 'Ver Pronósticos 🔽';
    }
}

function switchRoundSubTab(roundNum) {
    state.currentRound = roundNum;
    localStorage.setItem('iesa_current_round', roundNum);
    renderGroupMatches();
}
