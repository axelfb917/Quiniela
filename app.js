// Datos iniciales de partidos de la Fase de Grupos (Mundial 2026)
const DEFAULT_MATCHES = [
    // Grupo A
    { id: 'A1', group: 'A', team1: 'México', emoji1: '🇲🇽', team2: 'Sudáfrica', emoji2: '🇿🇦', date: '11 de junio', time: '17:00' },
    { id: 'A2', group: 'A', team1: 'Corea del Sur', emoji1: '🇰🇷', team2: 'Chequia', emoji2: '🇨🇿', date: '11 de junio', time: '20:00' },
    { id: 'A3', group: 'A', team1: 'México', emoji1: '🇲🇽', team2: 'Corea del Sur', emoji2: '🇰🇷', date: '19 de junio', time: '13:00' },
    { id: 'A4', group: 'A', team1: 'Sudáfrica', emoji1: '🇿🇦', team2: 'Chequia', emoji2: '🇨🇿', date: '19 de junio', time: '16:00' },
    { id: 'A5', group: 'A', team1: 'México', emoji1: '🇲🇽', team2: 'Chequia', emoji2: '🇨🇿', date: '27 de junio', time: '13:00' },
    { id: 'A6', group: 'A', team1: 'Sudáfrica', emoji1: '🇿🇦', team2: 'Corea del Sur', emoji2: '🇰🇷', date: '27 de junio', time: '13:00' },
    // Grupo B
    { id: 'B1', group: 'B', team1: 'Canadá', emoji1: '🇨🇦', team2: 'Bosnia y Herzegovina', emoji2: '🇧🇦', date: '12 de junio', time: '13:00' },
    { id: 'B2', group: 'B', team1: 'Catar', emoji1: '🇶🇦', team2: 'Suiza', emoji2: '🇨🇭', date: '13 de junio', time: '13:00' },
    { id: 'B3', group: 'B', team1: 'Canadá', emoji1: '🇨🇦', team2: 'Catar', emoji2: '🇶🇦', date: '19 de junio', time: '19:00' },
    { id: 'B4', group: 'B', team1: 'Bosnia y Herzegovina', emoji1: '🇧🇦', team2: 'Suiza', emoji2: '🇨🇭', date: '20 de junio', time: '13:00' },
    { id: 'B5', group: 'B', team1: 'Canadá', emoji1: '🇨🇦', team2: 'Suiza', emoji2: '🇨🇭', date: '27 de junio', time: '16:00' },
    { id: 'B6', group: 'B', team1: 'Bosnia y Herzegovina', emoji1: '🇧🇦', team2: 'Catar', emoji2: '🇶🇦', date: '27 de junio', time: '16:00' },
    // Grupo C
    { id: 'C1', group: 'C', team1: 'Brasil', emoji1: '🇧🇷', team2: 'Marruecos', emoji2: '🇲🇦', date: '13 de junio', time: '16:00' },
    { id: 'C2', group: 'C', team1: 'Haití', emoji1: '🇭🇹', team2: 'Escocia', emoji2: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', date: '13 de junio', time: '20:00' },
    { id: 'C3', group: 'C', team1: 'Brasil', emoji1: '🇧🇷', team2: 'Haití', emoji2: '🇭🇹', date: '20 de junio', time: '16:00' },
    { id: 'C4', group: 'C', team1: 'Marruecos', emoji1: '🇲🇦', team2: 'Escocia', emoji2: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', date: '20 de junio', time: '19:00' },
    { id: 'C5', group: 'C', team1: 'Brasil', emoji1: '🇧🇷', team2: 'Escocia', emoji2: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', date: '27 de junio', time: '19:00' },
    { id: 'C6', group: 'C', team1: 'Marruecos', emoji1: '🇲🇦', team2: 'Haití', emoji2: '🇭🇹', date: '27 de junio', time: '19:00' },
    // Grupo D
    { id: 'D1', group: 'D', team1: 'Estados Unidos', emoji1: '🇺🇸', team2: 'Paraguay', emoji2: '🇵🇾', date: '12 de junio', time: '19:00' },
    { id: 'D2', group: 'D', team1: 'Australia', emoji1: '🇦🇺', team2: 'Turquía', emoji2: '🇹🇷', date: '13 de junio', time: '19:00' },
    { id: 'D3', group: 'D', team1: 'Estados Unidos', emoji1: '🇺🇸', team2: 'Australia', emoji2: '🇦🇺', date: '21 de junio', time: '13:00' },
    { id: 'D4', group: 'D', team1: 'Paraguay', emoji1: '🇵🇾', team2: 'Turquía', emoji2: '🇹🇷', date: '21 de junio', time: '16:00' },
    { id: 'D5', group: 'D', team1: 'Estados Unidos', emoji1: '🇺🇸', team2: 'Turquía', emoji2: '🇹🇷', date: '27 de junio', time: '22:00' },
    { id: 'D6', group: 'D', team1: 'Paraguay', emoji1: '🇵🇾', team2: 'Australia', emoji2: '🇦🇺', date: '27 de junio', time: '22:00' },
    // Grupo E
    { id: 'E1', group: 'E', team1: 'Alemania', emoji1: '🇩🇪', team2: 'Curazao', emoji2: '🇨🇼', date: '14 de junio', time: '13:00' },
    { id: 'E2', group: 'E', team1: 'Costa de Marfil', emoji1: '🇨🇮', team2: 'Ecuador', emoji2: '🇪🇨', date: '14 de junio', time: '16:00' },
    { id: 'E3', group: 'E', team1: 'Alemania', emoji1: '🇩🇪', team2: 'Costa de Marfil', emoji2: '🇨🇮', date: '21 de junio', time: '19:00' },
    { id: 'E4', group: 'E', team1: 'Curazao', emoji1: '🇨🇼', team2: 'Ecuador', emoji2: '🇪🇨', date: '22 de junio', time: '13:00' },
    { id: 'E5', group: 'E', team1: 'Alemania', emoji1: '🇩🇪', team2: 'Ecuador', emoji2: '🇪🇨', date: '28 de junio', time: '13:00' },
    { id: 'E6', group: 'E', team1: 'Curazao', emoji1: '🇨🇼', team2: 'Costa de Marfil', emoji2: '🇨🇮', date: '28 de junio', time: '13:00' },
    // Grupo F
    { id: 'F1', group: 'F', team1: 'Países Bajos', emoji1: '🇳🇱', team2: 'Japón', emoji2: '🇯🇵', date: '14 de junio', time: '19:00' },
    { id: 'F2', group: 'F', team1: 'Suecia', emoji1: '🇸🇪', team2: 'Túnez', emoji2: '🇹🇳', date: '15 de junio', time: '13:00' },
    { id: 'F3', group: 'F', team1: 'Países Bajos', emoji1: '🇳🇱', team2: 'Suecia', emoji2: '🇸🇪', date: '22 de junio', time: '16:00' },
    { id: 'F4', group: 'F', team1: 'Japón', emoji1: '🇯🇵', team2: 'Túnez', emoji2: '🇹🇳', date: '22 de junio', time: '19:00' },
    { id: 'F5', group: 'F', team1: 'Países Bajos', emoji1: '🇳🇱', team2: 'Túnez', emoji2: '🇹🇳', date: '28 de junio', time: '16:00' },
    { id: 'F6', group: 'F', team1: 'Japón', emoji1: '🇯🇵', team2: 'Suecia', emoji2: '🇸🇪', date: '28 de junio', time: '16:00' },
    // Grupo G
    { id: 'G1', group: 'G', team1: 'Bélgica', emoji1: '🇧🇪', team2: 'Egipto', emoji2: '🇪🇬', date: '15 de junio', time: '16:00' },
    { id: 'G2', group: 'G', team1: 'Irán', emoji1: '🇮🇷', team2: 'Nueva Zelanda', emoji2: '🇳🇿', date: '15 de junio', time: '19:00' },
    { id: 'G3', group: 'G', team1: 'Bélgica', emoji1: '🇧🇪', team2: 'Irán', emoji2: '🇮🇷', date: '23 de junio', time: '13:00' },
    { id: 'G4', group: 'G', team1: 'Egipto', emoji1: '🇪🇬', team2: 'Nueva Zelanda', emoji2: '🇳🇿', date: '23 de junio', time: '16:00' },
    { id: 'G5', group: 'G', team1: 'Bélgica', emoji1: '🇧🇪', team2: 'Nueva Zelanda', emoji2: '🇳🇿', date: '28 de junio', time: '19:00' },
    { id: 'G6', group: 'G', team1: 'Egipto', emoji1: '🇪🇬', team2: 'Irán', emoji2: '🇮🇷', date: '28 de junio', time: '19:00' },
    // Grupo H
    { id: 'H1', group: 'H', team1: 'España', emoji1: '🇪🇸', team2: 'Cabo Verde', emoji2: '🇨🇻', date: '16 de junio', time: '13:00' },
    { id: 'H2', group: 'H', team1: 'Arabia Saudita', emoji1: '🇸🇦', team2: 'Uruguay', emoji2: '🇺🇾', date: '16 de junio', time: '16:00' },
    { id: 'H3', group: 'H', team1: 'España', emoji1: '🇪🇸', team2: 'Arabia Saudita', emoji2: '🇸🇦', date: '23 de junio', time: '19:00' },
    { id: 'H4', group: 'H', team1: 'Cabo Verde', emoji1: '🇨🇻', team2: 'Uruguay', emoji2: '🇺🇾', date: '24 de junio', time: '13:00' },
    { id: 'H5', group: 'H', team1: 'España', emoji1: '🇪🇸', team2: 'Uruguay', emoji2: '🇺🇾', date: '29 de junio', time: '13:00' },
    { id: 'H6', group: 'H', team1: 'Cabo Verde', emoji1: '🇨🇻', team2: 'Arabia Saudita', emoji2: '🇸🇦', date: '29 de junio', time: '13:00' },
    // Grupo I
    { id: 'I1', group: 'I', team1: 'Francia', emoji1: '🇫🇷', team2: 'Senegal', emoji2: '🇸🇳', date: '16 de junio', time: '19:00' },
    { id: 'I2', group: 'I', team1: 'Irak', emoji1: '🇮🇶', team2: 'Noruega', emoji2: '🇳🇴', date: '17 de junio', time: '13:00' },
    { id: 'I3', group: 'I', team1: 'Francia', emoji1: '🇫🇷', team2: 'Irak', emoji2: '🇮🇶', date: '24 de junio', time: '16:00' },
    { id: 'I4', group: 'I', team1: 'Senegal', emoji1: '🇸🇳', team2: 'Noruega', emoji2: '🇳🇴', date: '24 de junio', time: '19:00' },
    { id: 'I5', group: 'I', team1: 'Francia', emoji1: '🇫🇷', team2: 'Noruega', emoji2: '🇳🇴', date: '29 de junio', time: '16:00' },
    { id: 'I6', group: 'I', team1: 'Senegal', emoji1: '🇸🇳', team2: 'Irak', emoji2: '🇮🇶', date: '29 de junio', time: '16:00' },
    // Grupo J
    { id: 'J1', group: 'J', team1: 'Argentina', emoji1: '🇦🇷', team2: 'Argelia', emoji2: '🇩🇿', date: '17 de junio', time: '16:00' },
    { id: 'J2', group: 'J', team1: 'Austria', emoji1: '🇦🇹', team2: 'Jordania', emoji2: '🇯🇴', date: '17 de junio', time: '19:00' },
    { id: 'J3', group: 'J', team1: 'Argentina', emoji1: '🇦🇷', team2: 'Austria', emoji2: '🇦🇹', date: '25 de junio', time: '13:00' },
    { id: 'J4', group: 'J', team1: 'Argelia', emoji1: '🇩🇿', team2: 'Jordania', emoji2: '🇯🇴', date: '25 de junio', time: '16:00' },
    { id: 'J5', group: 'J', team1: 'Argentina', emoji1: '🇦🇷', team2: 'Jordania', emoji2: '🇯🇴', date: '29 de junio', time: '19:00' },
    { id: 'J6', group: 'J', team1: 'Argelia', emoji1: '🇩🇿', team2: 'Austria', emoji2: '🇦🇹', date: '29 de junio', time: '19:00' },
    // Grupo K
    { id: 'K1', group: 'K', team1: 'Portugal', emoji1: '🇵🇹', team2: 'RD Congo', emoji2: '🇨🇩', date: '18 de junio', time: '13:00' },
    { id: 'K2', group: 'K', team1: 'Uzbekistán', emoji1: '🇺🇿', team2: 'Colombia', emoji2: '🇨🇴', date: '18 de junio', time: '16:00' },
    { id: 'K3', group: 'K', team1: 'Portugal', emoji1: '🇵🇹', team2: 'Uzbekistán', emoji2: '🇺🇿', date: '25 de junio', time: '19:00' },
    { id: 'K4', group: 'K', team1: 'RD Congo', emoji1: '🇨🇩', team2: 'Colombia', emoji2: '🇨🇴', date: '26 de junio', time: '13:00' },
    { id: 'K5', group: 'K', team1: 'Portugal', emoji1: '🇵🇹', team2: 'Colombia', emoji2: '🇨🇴', date: '29 de junio', time: '22:00' },
    { id: 'K6', group: 'K', team1: 'RD Congo', emoji1: '🇨🇩', team2: 'Uzbekistán', emoji2: '🇺🇿', date: '29 de junio', time: '22:00' },
    // Grupo L
    { id: 'L1', group: 'L', team1: 'Inglaterra', emoji1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', team2: 'Croacia', emoji2: '🇭🇷', date: '18 de junio', time: '19:00' },
    { id: 'L2', group: 'L', team1: 'Ghana', emoji1: '🇬🇭', team2: 'Panamá', emoji2: '🇵🇦', date: '18 de junio', time: '22:00' },
    { id: 'L3', group: 'L', team1: 'Inglaterra', emoji1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', team2: 'Ghana', emoji2: '🇬🇭', date: '26 de junio', time: '16:00' },
    { id: 'L4', group: 'L', team1: 'Croacia', emoji1: '🇭🇷', team2: 'Panamá', emoji2: '🇵🇦', date: '26 de junio', time: '19:00' },
    { id: 'L5', group: 'L', team1: 'Inglaterra', emoji1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', team2: 'Panamá', emoji2: '🇵🇦', date: '29 de junio', time: '22:00' },
    { id: 'L6', group: 'L', team1: 'Croacia', emoji1: '🇭🇷', team2: 'Ghana', emoji2: '🇬🇭', date: '29 de junio', time: '22:00' }
];

// Estructura de Fase Final (Definición de llaves)
const KNOCKOUT_MATCHES = {
    r32: [
        { id: 'R32_1', label: 'Boston', team1: '1E', team2: '3rd_1', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_2', label: 'Nueva York/Nueva Jersey', team1: '1I', team2: '3rd_3', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_3', label: 'Los Ángeles', team1: '2A', team2: '2B', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_4', label: 'Monterrey', team1: '1F', team2: '2C', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_5', label: 'Toronto', team1: '2K', team2: '2L', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_6', label: 'Los Ángeles', team1: '1H', team2: '2J', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_7', label: 'San Francisco', team1: '1D', team2: '3rd_2', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_8', label: 'Seattle', team1: '1G', team2: '3rd_5', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_9', label: 'Houston', team1: '1C', team2: '2F', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_10', label: 'Dallas', team1: '2E', team2: '2I', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_11', label: 'Ciudad de México', team1: '1A', team2: '3rd_6', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_12', label: 'Atlanta', team1: '1L', team2: '3rd_8', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_13', label: 'Miami', team1: '1J', team2: '2H', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_14', label: 'Dallas', team1: '2D', team2: '2G', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_15', label: 'Vancouver', team1: '1B', team2: '3rd_7', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R32_16', label: 'Kansas City', team1: '1K', team2: '3rd_4', emoji1: '🏆', emoji2: '🏆' }
    ],
    r16: [
        { id: 'R16_1', label: 'Filadelfia', team1: 'Ganador Eliminatoria 1', team2: 'Ganador Eliminatoria 2', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R16_2', label: 'Houston', team1: 'Ganador Eliminatoria 3', team2: 'Ganador Eliminatoria 4', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R16_3', label: 'Dallas', team1: 'Ganador Eliminatoria 5', team2: 'Ganador Eliminatoria 6', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R16_4', label: 'Seattle', team1: 'Ganador Eliminatoria 7', team2: 'Ganador Eliminatoria 8', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R16_5', label: 'Nueva York/Nueva Jersey', team1: 'Ganador Eliminatoria 9', team2: 'Ganador Eliminatoria 10', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R16_6', label: 'Ciudad de México', team1: 'Ganador Eliminatoria 11', team2: 'Ganador Eliminatoria 12', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R16_7', label: 'Atlanta', team1: 'Ganador Eliminatoria 13', team2: 'Ganador Eliminatoria 14', emoji1: '🏆', emoji2: '🏆' },
        { id: 'R16_8', label: 'Vancouver', team1: 'Ganador Eliminatoria 15', team2: 'Ganador Eliminatoria 16', emoji1: '🏆', emoji2: '🏆' }
    ],
    qf: [
        { id: 'QF_1', label: 'Boston', team1: 'Ganador Octavos 1', team2: 'Ganador Octavos 2', emoji1: '🏆', emoji2: '🏆' },
        { id: 'QF_2', label: 'Los Ángeles', team1: 'Ganador Octavos 3', team2: 'Ganador Octavos 4', emoji1: '🏆', emoji2: '🏆' },
        { id: 'QF_3', label: 'Miami', team1: 'Ganador Octavos 5', team2: 'Ganador Octavos 6', emoji1: '🏆', emoji2: '🏆' },
        { id: 'QF_4', label: 'Kansas City', team1: 'Ganador Octavos 7', team2: 'Ganador Octavos 8', emoji1: '🏆', emoji2: '🏆' }
    ],
    sf: [
        { id: 'SF_1', label: 'Dallas', team1: 'Ganador Cuartos 1', team2: 'Ganador Cuartos 2', emoji1: '🏆', emoji2: '🏆' },
        { id: 'SF_2', label: 'Atlanta', team1: 'Ganador Cuartos 3', team2: 'Ganador Cuartos 4', emoji1: '🏆', emoji2: '🏆' }
    ],
    f: [
        { id: 'F_1', label: 'Gran Final - Nueva York/Nueva Jersey', team1: 'Ganador Semifinal 1', team2: 'Ganador Semifinal 2', emoji1: '🏆', emoji2: '🏆' },
        { id: 'F_2', label: 'Partido Tercer Puesto - Miami', team1: 'Perdedor Semifinal 1', team2: 'Perdedor Semifinal 2', emoji1: '🥉', emoji2: '🥉' }
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
const GROUP_STAGE_LOCK_TIME = new Date('2026-06-11T12:00:00-06:00');

function isGroupStageLocked() {
    return new Date() >= GROUP_STAGE_LOCK_TIME;
}

// Variables de Estado global
let state = {
    activePage: 'profile',
    currentGroup: 'ALL',
    currentKnockoutRound: 'r32',
    adminPhase: 'groups',
    currentUser: null,
    users: [],
    officialResults: {} // { matchId: { score1, score2 } } o { knockoutId: winnerTeamName }
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
        const response = await fetch('https://quiniela-7fd9f-default-rtdb.firebaseio.com/.json');
        const data = await response.json();

        const officialResults = (data && data.official_results) ? data.official_results : null;
        const users = (data && data.users) ? data.users : null;

        // 1. Cargar Resultados Oficiales
        if (officialResults) {
            state.officialResults = officialResults;
            
            // Sanitizar resultados de fase final incompatibles del formato anterior
            const hasR32 = Object.keys(state.officialResults).some(k => k.startsWith('R32_'));
            const hasLegacy = Object.keys(state.officialResults).some(k => k.startsWith('R16_') || k.startsWith('QF_') || k.startsWith('SF_') || k.startsWith('F_'));
            
            if (hasLegacy && !hasR32) {
                for (const key in state.officialResults) {
                    if (key.startsWith('R16_') || key.startsWith('QF_') || key.startsWith('SF_') || key.startsWith('F_')) {
                        delete state.officialResults[key];
                    }
                }
                await saveOfficialResultsToStorage();
            }
        } else {
            // Si no hay resultados oficiales en la base de datos, inicializar como vacío
            state.officialResults = {};
        }

        // 2. Cargar Usuarios
        if (users) {
            // Firebase puede retornar un objeto { u_1: {...} } o un arreglo. Lo normalizamos a arreglo.
            state.users = Array.isArray(users) ? users.filter(Boolean) : Object.values(users);
            
            // Eliminar usuarios de prueba (demo) si existen en la base de datos
            const filteredUsers = state.users.filter(u => !u.id.startsWith('u_demo'));
            if (filteredUsers.length !== state.users.length) {
                state.users = filteredUsers;
                await saveUsersToStorage();
            }

            // Sanitizar predicciones incompatibles
            state.users.forEach(u => {
                if (!u.predictions) u.predictions = {};
                if (!u.knockoutWinner) u.knockoutWinner = {};
                
                const hasR32Pred = Object.keys(u.knockoutWinner).some(k => k.startsWith('r32_'));
                const hasLegacyPred = Object.keys(u.knockoutWinner).some(k => k.startsWith('r16_') || k.startsWith('qf_') || k.startsWith('sf_') || k.startsWith('f_') || k.startsWith('R16_'));
                
                if (hasLegacyPred && !hasR32Pred) {
                    u.knockoutWinner = {};
                }
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
            switchPage('profile');
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
    
    // Si el usuario activo es administrador, realizamos un PATCH por lotes para actualizar puntajes
    // sin borrar usuarios que se estén registrando en el mismo momento.
    if (activeUser && activeUser.isAdmin) {
        const patchData = {};
        state.users.forEach(u => {
            if (u && u.id) {
                patchData[u.id] = u;
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
            console.error("Error al actualizar lote de usuarios en Firebase:", error);
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
    document.querySelectorAll('#knockoutNav .group-tab').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
    renderKnockoutMatches();
}

// Cambiar pestaña de administración en el panel Admin
function switchAdminPhase(phaseKey, element) {
    state.adminPhase = phaseKey;
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
        if (profileNameEl) profileNameEl.textContent = user.name;
        
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
    
    // Filtrar partidos
    let filteredMatches = DEFAULT_MATCHES;
    if (state.currentGroup !== 'ALL') {
        filteredMatches = DEFAULT_MATCHES.filter(m => m.group === state.currentGroup);
    }
    
    const user = state.users.find(u => u.id === state.currentUser);
    if (!user) return;

    // Agregar banner de estado de la votación
    const locked = isGroupStageLocked();
    const banner = document.createElement('div');
    if (locked) {
        banner.className = 'lockout-banner locked';
        banner.innerHTML = `
            <span class="lockout-icon">🔒</span>
            <div class="lockout-content">
                <div class="lockout-title">Votaciones de Grupos Cerradas</div>
                <div class="lockout-desc">El plazo para pronosticar la fase de grupos finalizó el jueves 11 de junio a las 12:00 PM. Puedes ver tus pronósticos y marcadores oficiales.</div>
            </div>
        `;
    } else {
        const diffMs = GROUP_STAGE_LOCK_TIME - new Date();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffHours / 24);
        let timeRemainingText = '';
        if (diffDays > 0) {
            timeRemainingText = `Faltan ${diffDays} día(s) y ${diffHours % 24} hora(s)`;
        } else if (diffHours > 0) {
            timeRemainingText = `Faltan ${diffHours} hora(s) y ${Math.floor((diffMs / (1000 * 60)) % 60)} minuto(s)`;
        } else {
            const diffMins = Math.floor(diffMs / (1000 * 60));
            timeRemainingText = `Faltan ${diffMins} minuto(s)`;
        }
        
        banner.className = 'lockout-banner active';
        banner.innerHTML = `
            <span class="lockout-icon animated-icon">🔓</span>
            <div class="lockout-content">
                <div class="lockout-title">Votaciones de Grupos Abiertas</div>
                <div class="lockout-desc">Tienes hasta el jueves 11 de junio a las 12:00 PM para guardar tus pronósticos. <strong style="color:var(--success-color); white-space: nowrap;">(${timeRemainingText})</strong></div>
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
            } else if (locked) {
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

        const predictedWinner = user.knockoutWinner[`${roundKey}_${index}`];
        const officialWinner = state.officialResults[match.id];

        let pointsEarnedHtml = '';
        if (officialWinner && predictedWinner) {
            const isCorrect = officialWinner === predictedWinner;
            pointsEarnedHtml = `<span class="points-earned ${isCorrect ? 'success' : 'zero'}">${isCorrect ? '+5 Pts' : '0 Pts'}</span>`;
        }

        const matchDiv = document.createElement('div');
        matchDiv.className = 'bracket-match';
        
        const isTeam1Selected = predictedWinner === team1.name;
        const isTeam2Selected = predictedWinner === team2.name;

        const officialWinnerHtml = officialWinner 
            ? `<span style="font-size:0.75rem; color:var(--warning-color); font-weight:bold; margin-top:2px;">Ganador Oficial: ${officialWinner}</span>`
            : `<span style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">Por jugar</span>`;

        const clickHandler1 = user.isAdmin ? '' : `onclick="selectKnockoutWinner('${roundKey}', ${index}, '${team1.name}')"`;
        const clickHandler2 = user.isAdmin ? '' : `onclick="selectKnockoutWinner('${roundKey}', ${index}, '${team2.name}')"`;
        const cursorStyle = user.isAdmin ? 'style="cursor: default;"' : '';

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
    
    return { name: slotId, emoji: '🏳️' };
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

// Obtener los mejores 8 terceros puestos
function getBestThirdPlaces(isOfficial) {
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    const thirds = [];
    
    groups.forEach(g => {
        const standings = getCalculatedStandings(g, isOfficial);
        if (standings.length >= 3) {
            thirds.push(standings[2]);
        }
    });
    
    return thirds.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.gd !== a.gd) return b.gd - a.gd;
        if (b.gf !== a.gf) return b.gf - a.gf;
        return a.name.localeCompare(b.name);
    });
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

// Validar y limpiar cascada de predicciones o resultados oficiales si los equipos cambiaron
function validateKnockoutPredictions(isOfficial) {
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
                const winner = state.officialResults[match.id];
                if (winner && winner !== team1.name && winner !== team2.name) {
                    delete state.officialResults[match.id];
                    changed = true;
                }
            } else {
                if (user && user.knockoutWinner) {
                    const winner = user.knockoutWinner[`${roundKey}_${index}`];
                    if (winner && winner !== team1.name && winner !== team2.name) {
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
    const winnerName = user.knockoutWinner[`${roundKey}_${matchIndex}`];
    if (!winnerName) return null;

    let emoji = getTeamEmoji(winnerName);
    return { name: winnerName, emoji };
}

// Obtener el perdedor de una semifinal para disputar el tercer puesto
function getLoserOfPreviousMatch(roundKey, matchIndex) {
    const user = state.users.find(u => u.id === state.currentUser);
    const winnerName = user.knockoutWinner[`${roundKey}_${matchIndex}`];
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
    const user = state.users.find(u => u.id === state.currentUser);
    if (user.isAdmin) return; // El administrador no realiza predicciones
    if (!teamName || teamName.includes('Ganador') || teamName.includes('Finalista')) return; // No permitir selecciones placeholders
    
    if (!user.knockoutWinner) user.knockoutWinner = {};
    user.knockoutWinner[`${roundKey}_${matchIndex}`] = teamName;

    // Limpiar predicciones de rondas siguientes si dependían de esta llave
    cleanSubsequentRounds(roundKey, matchIndex);

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

// Renderizar la Tabla General de Posiciones (Leaderboard)
function renderLeaderboard() {
    const list = document.getElementById('leaderboardList');
    list.innerHTML = '';

    // Ordenar usuarios por puntaje total
    const sortedUsers = [...state.users].sort((a, b) => (b.totalPoints || 0) - (a.totalPoints || 0));

    sortedUsers.forEach((user, index) => {
        const isSelf = user.id === state.currentUser;
        
        let trophy = '';
        if (index === 0) trophy = '👑 ';

        const item = document.createElement('div');
        item.className = `leaderboard-item ${isSelf ? 'current-user' : ''}`;
        item.innerHTML = `
            <div class="rank-number">${index + 1}</div>
            <div class="user-info">
                <span class="user-name">${trophy}${user.name}</span>
                <span class="user-dept">${user.dept}</span>
            </div>
            <div class="user-points-badge">
                ${user.totalPoints || 0} Pts
            </div>
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

            const officialWinner = state.officialResults[match.id];
            const isKnockoutDefined = !!officialWinner;
            const knockoutBadgeClass = isKnockoutDefined ? 'status-filled' : 'status-pending';
            const knockoutBadgeText = isKnockoutDefined ? 'Definido' : 'Sin definir';

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
            `;
            list.appendChild(card);
        });
    }
}

// Obtener ganador de ronda anterior oficial
function getOfficialWinnerOfPreviousMatch(roundKey, matchIndex) {
    const winnerName = state.officialResults[`${roundKey.toUpperCase()}_${matchIndex + 1}`];
    if (!winnerName) return null;

    let emoji = getTeamEmoji(winnerName);
    return { name: winnerName, emoji };
}

// Obtener perdedor de ronda anterior oficial
function getOfficialLoserOfPreviousMatch(roundKey, matchIndex) {
    const winnerName = state.officialResults[`${roundKey.toUpperCase()}_${matchIndex + 1}`];
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
    renderAdminMatches();
}

// Guardar Ganador Oficial de la Fase Final en el Administrador
function setOfficialKnockoutWinner(matchId, teamName) {
    const [roundPrefix, indexStr] = matchId.split('_');
    const roundKey = roundPrefix.toLowerCase();
    const matchIndex = parseInt(indexStr) - 1;

    if (state.officialResults[matchId] === teamName) {
        delete state.officialResults[matchId];
    } else {
        state.officialResults[matchId] = teamName;
    }
    
    cleanSubsequentOfficialRounds(roundKey, matchIndex);
    
    saveOfficialResultsToStorage();
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

// Calcular puntos totales de todos los usuarios
function calculateAllPoints() {
    state.users.forEach(user => {
        let total = 0;

        // Puntos por Fase de Grupos
        for (const matchId in user.predictions) {
            const prediction = user.predictions[matchId];
            const official = state.officialResults[matchId];
            if (official) {
                total += calculateMatchPoints(prediction, official);
            }
        }

        // Puntos por Fase Final (Acierto de clasificados / ganadores en llave)
        for (const key in user.knockoutWinner) {
            const predictedWinner = user.knockoutWinner[key];
            
            // Extraer la llave asociada en officialResults
            // La key del usuario es 'r16_0', 'r16_1', etc. Mapeamos a 'R16_1', 'R16_2'
            const [round, indexStr] = key.split('_');
            const index = parseInt(indexStr);
            const matchId = `${round.toUpperCase()}_${index + 1}`;

            const officialWinner = state.officialResults[matchId];
            if (officialWinner && officialWinner === predictedWinner) {
                total += 5; // Acierto de clasificado/ganador de llave (+5 pts)
            }
        }

        user.totalPoints = total;
    });

    // Guardar los puntos actualizados
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

function submitRegister() {
    const nameInput = document.getElementById('registerNameInput');
    const deptInput = document.getElementById('registerDeptInput');
    const passwordInput = document.getElementById('registerPasswordInput');
    const errorMsg = document.getElementById('registerErrorMsg');
    
    if (!nameInput || !deptInput || !passwordInput) return;
    
    const name = nameInput.value.trim();
    const dept = deptInput.value.trim() || 'General';
    const password = passwordInput.value.trim();
    
    if (!name || !password) {
        if (errorMsg) errorMsg.style.display = 'block';
        return;
    }
    
    if (errorMsg) errorMsg.style.display = 'none';
    
    const exists = state.users.find(u => u.name.toLowerCase() === name.toLowerCase());
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
    
    state.users.push(newUser);
    state.currentUser = newUser.id;
    localStorage.setItem('iesa_current_user', newUser.id);
    
    nameInput.value = '';
    deptInput.value = '';
    passwordInput.value = '';
    
    saveUsersToStorage();
    switchPage('profile');
}

function logout() {
    state.currentUser = null;
    localStorage.removeItem('iesa_current_user');
    switchPage('login');
}

// Guardar marcador del pronóstico de forma directa
function saveDirectPrediction(matchId, teamIndex, value) {
    const user = state.users.find(u => u.id === state.currentUser);
    if (!user || user.isAdmin) return;
    if (isGroupStageLocked()) return; // Evitar guardar si está bloqueada la fase de grupos
    
    if (!user.predictions[matchId]) {
        user.predictions[matchId] = { score1: null, score2: null };
    }
    
    const parsedVal = value === '' ? null : parseInt(value);
    
    if (teamIndex === 1) {
        user.predictions[matchId].score1 = parsedVal;
    } else {
        user.predictions[matchId].score2 = parsedVal;
    }
    
    saveUsersToStorage();
    
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
    
    // Actualizar stats
    const predictedGroupsCount = DEFAULT_MATCHES.filter(m => user.predictions[m.id] && user.predictions[m.id].score1 !== null && user.predictions[m.id].score2 !== null).length;
    const profileMatchesPredicted = document.getElementById('profileMatchesPredicted');
    if (profileMatchesPredicted) {
        profileMatchesPredicted.textContent = `${predictedGroupsCount}/${DEFAULT_MATCHES.length}`;
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
}

async function resetOfficialResults() {
    if (confirm("¿Estás seguro de que deseas restablecer todos los resultados oficiales? Esto borrará todos los marcadores reales de grupos y ganadores de llaves.")) {
        state.officialResults = {};
        await saveOfficialResultsToStorage();
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
