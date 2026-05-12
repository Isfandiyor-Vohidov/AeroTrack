        // Check authentication
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user') || 'null');

        if (!token || !user) {
            window.location.href = 'login.html';
        } else {
            // Update UI with user info
            document.addEventListener('DOMContentLoaded', function() {
                const userDisplay = document.getElementById('userDisplay');
                const logoutBtn = document.getElementById('logoutBtn');
                if (userDisplay) userDisplay.textContent = `Привет, ${user.username}!`;
                if (logoutBtn) logoutBtn.style.display = 'inline';
            });
        }

        (function() {
            const APP_NAME = "Инвентаризация Техники PRO";
            const VERSION = "5.2";
            
            const PLAN_FILES = {
                "Главная схема": "toshkent_aeroporti.jpg",
                "Первый этаж": "1_etaj.jpg",
                "Второй этаж": "2_etaj.jpg"
            };
             const ROOM_MAP = {

                
    "Главная схема": {
        "Первый этаж": [83, 405, 1152, 470],
        "Второй этаж": [83, 325, 1152, 400],
    },
    
    "Первый этаж": {
        "Команата 1": [ 20, 223, 75, 275 ],
        "Комната 2": [ 35, 275, 220, 420 ],
        "Продолжение комнаты 2": [ 170, 252, 220, 275 ],
        "Комната 3": [ 20, 420, 75, 470 ],
        "Комната 4": [ 20, 470, 75, 520 ],
        "Комната 5": [ 75, 252, 170, 275 ],
        "Комната 6": [ 70, 420, 220, 490 ],
        "Комната 7": [ 220, 223, 330, 370 ],
        "Комната 8": [ 220, 370, 330, 420 ],
        "Комната 9": [ 220, 420, 245, 440 ],
        "Комната 10": [ 220, 465, 270, 517 ],
        "Комната 11": [ 309, 465, 348, 517 ],
        "Комната 12": [ 330, 335, 380, 370 ],
        "Комната 13": [ 330, 390, 355, 420 ],
        "Комната 14": [ 355, 390, 380, 420 ],
        "Комната 15": [ 380, 390, 428, 420 ],
        "Комната 16": [ 357, 469, 377, 493 ],
        "Комната 17": [ 357, 494, 378, 518 ],
        "Комната 18": [ 356, 519, 378, 541 ],
        "Комната 19": [ 327, 543, 379, 568 ],
        "Комната 20": [ 573, 322, 594, 373 ],
        "Комната 21": [ 596, 322, 620, 344 ],
        "Комната 22": [ 596, 342, 620, 373 ],
        "Комната 23": [ 815, 322, 839, 344 ],
        "Комната 24": [ 815, 344, 839, 372 ],
        "Комната 25": [ 815, 371, 860, 395 ],
        "Комната 26": [ 814, 396, 837, 420 ],
        "Комната 27": [ 840, 396, 861, 421 ],
        "Комната 28": [ 863, 372, 910, 420 ],
        "Комната 29": [ 976, 226, 1022, 260 ],
        "Комната 30": [ 843, 322, 911, 370 ],
        "Комната 31": [ 913, 371, 976, 422 ],
        "Комната 32": [ 978, 259, 992, 273 ],
        "Комната 33": [ 995, 259, 1023, 273 ],
        "Комната 34": [ 1028, 253, 1121, 324 ],
        "Комната 35": [ 999, 322, 1026, 348 ],
        "Комната 36": [ 999, 348, 1026, 370 ],
        "Комната 37": [ 999, 371, 1017, 401 ],
        "Комната 38": [ 999, 402, 1026, 422 ],
        "Комната 39": [ 999, 421, 1026, 441 ],
        "Комната 40": [ 878, 476, 899, 491 ],
        "Комната 41": [ 863, 470, 880, 517 ],
        "Комната 42": [ 899, 466, 926, 516 ],
        "Комната 43": [ 902, 518, 915, 557 ],
        "Комната 44": [ 862, 519, 904, 576 ],
        "Комната 45": [ 978, 468, 1010, 519 ],
        "Комната 46": [ 1012, 468, 1024, 510 ],
        "Комната 47": [ 1029, 468, 1074, 491 ],
        "Комната 48": [ 1123, 254, 1168, 272 ],
        "Комната 49": [ 1173, 224, 1216, 256 ],
        "Комната 50": [ 1174, 259, 1187, 271 ],
        "Комната 51": [ 1203, 259, 1219, 270 ],
        "Комната 52": [ 1124, 420, 1168, 489 ],
        "Комната 53": [ 1170, 420, 1218, 469 ],
        "Комната 54": [ 1170, 471, 1217, 519 ],
        "Комната 55": [ 914, 323, 998, 371 ],
        "Комната 56": [ 978, 371, 998, 422 ],
        "Комната 57": [ 914, 223, 977, 319 ],
        "Продолжение комнаты 57": [ 976, 275, 1023, 319 ]
    },
                
"Второй этаж": {
        "Комната 1": [ 20, 215, 75, 265 ], 
        "Комната 2": [ 25, 265, 75, 295 ],
        "Комната 3": [ 25, 295, 75, 315 ],
        "Комната 4": [ 37, 315, 75, 365 ],
        "Комната 5": [ 37, 365, 75, 410 ],
        "Комната 6": [ 20, 410, 75, 435 ],
        "Комната 7": [ 25, 435, 75, 465 ],
        "Комната 8": [ 25, 465, 75, 510 ],
        "Комната 9": [ 90, 265, 120, 315 ],
        "Комната 10": [ 120, 265, 170, 315 ],
        "Комната 11": [ 170, 265, 218, 315 ],
        "Комната 12": [ 218, 265, 247, 315 ],
        "Комната 13": [ 90, 315, 247, 415 ],
        "Комната 14": [ 90, 415, 120, 440 ],
        "Комната 15": [ 90, 440, 120, 465 ],
        "Комната 16": [ 120, 415, 145, 465 ],
        "Комната 17": [ 145, 415, 170, 465 ],
        "Комната 18": [ 170, 415, 195, 465 ],
        "Комната 19": [ 195, 415, 218, 465 ],
        "Комната 20": [ 218, 415, 247, 465 ],
        "Комната 21": [ 263, 220, 332, 270 ],
        "Комната 22": [ 263, 270, 332, 317 ],
        "продолжение Комнатаа 22": [ 263, 317, 314, 365 ],
        "Комната 23": [ 315, 317, 332, 365 ],
        "Комната 24": [ 263, 380, 314, 510 ],
        "Продолжение Комнатаа 24": [ 312, 415, 332, 462 ],
        "Комната 25": [ 315, 380, 332, 415 ],
        "Комната 26": [ 315, 460, 332, 480 ],
        "Комната 27": [ 330, 315, 355, 355 ],
        "Комната 28": [ 355, 315, 380, 355 ],
        "Комната 29": [ 379, 315, 403, 365 ],
        "Комната 30": [ 403, 315, 428, 365 ],
        "Комната 31": [ 428, 315, 453, 365 ],
        "Комната 32": [ 453, 315, 477, 365 ],
        "Комната 33": [ 477, 315, 500, 365 ],
        "Комната 34": [ 500, 315, 525, 350 ],
        "Комната 35": [ 525, 315, 572, 365 ],
        "Комната 36": [ 572, 315, 622, 365 ],
        "Маленький Комната": [ 500, 350, 525, 365 ],
        "Комната 37": [ 622, 315, 670, 365 ],
        "Комната 38": [ 670, 315, 718, 365 ],
        "Комната 39": [ 717, 315, 766, 365 ],
        "Комната 40": [ 765, 315, 816, 365 ],
        "Комната 41": [ 815, 315, 864, 365 ],
        "Комната 42": [ 863, 315, 912, 365 ],
        "Комната 43": [ 911, 315, 925, 365 ],
        "Комната 44": [ 378, 378, 402, 415 ],
        "Комната 45": [ 402, 378, 428, 415 ],
        "Комната 46": [ 428, 378, 475, 415 ],
        "Комната 47": [ 475, 378, 525, 415 ],
        "Комната 48": [ 525, 378, 572, 415 ],
        "Комната 49": [ 572, 378, 622, 415 ],
        "Комната 50": [ 622, 378, 670, 415 ],
        "Комната 51": [ 670, 378, 718, 415 ],
        "Комната 52": [ 717, 378, 766, 415 ],
        "Комната 53": [ 765, 378, 816, 415 ],
        "Комната 54": [ 815, 378, 864, 415 ],
        "Комната 55": [ 910, 365, 925, 415 ],
        "Комната 56": [ 910, 220, 974, 270 ],
        "Комната 57": [ 910, 460, 927, 478 ],
        "Комната 58": [ 974, 220, 1008, 243 ],
        "Комната 59": [ 974, 243, 1008, 270 ],
        "Комната 60": [ 1008, 230, 1025, 270 ],
        "Комната 61": [ 927, 462, 1024, 510 ],
        "Комната 62": [ 1025, 250, 1072, 318 ],
        "Комната 63": [ 1072, 250, 1095, 300 ],
        "Комната 64": [ 1095, 250, 1120, 300 ],
        "Комната 65": [ 1120, 250, 1145, 300 ],
        "Комната 66": [ 1145, 250, 1170, 300 ],
        "Комната 67": [ 1170, 223, 1215, 252 ],
        "Комната 68": [ 1184, 252, 1197, 267 ],
        "Комната 69": [ 1197, 252, 1209, 267 ],
        "Комната 70": [ 1209, 252, 1215, 280 ],
        "Комната 71": [ 1185, 280, 1220, 315 ],
        "Комната 72": [ 1025, 432, 1047, 480 ],
        "Комната 73": [ 1047, 432, 1071, 480 ],
        "Комната 74": [ 1071, 432, 1095, 480 ],
        "Комната 75": [ 1095, 432, 1120, 450 ],
        "Комната 76": [ 1095, 450, 1120, 480 ],
        "Комната 77": [ 1047, 318, 1121, 415 ],
        "Комната 78": [ 1120, 318, 1202, 365 ],
        "Комната 79": [ 1137, 365, 1202, 415 ],
        "Комната 80": [ 1137, 415, 1168, 450 ],
        "Комната 81": [ 1168, 415, 1178, 431 ],
        "Комната 82": [ 1178, 415, 1188, 431 ],
        "Комната 83": [ 1188, 415, 1198, 431 ],
        "Комната 84": [ 1198, 415, 1217, 431 ],
        "Комната 85": [ 1168, 432, 1217, 462 ],
        "Комната 86": [ 1168, 462, 1217, 510 ]
    },
                
            };
            
            // Иконки пользовательских устройств
            const USER_DEVICES_ICONS = {
                "Стол": "USER_DEVICES/stol.png",
                "Стул": "USER_DEVICES/stul.png",
                "Шкаф": "USER_DEVICES/shkaf.png",
                "Кресло": "USER_DEVICES/kreslo.png",
                "Рабочая станция": "USER_DEVICES/workstation.png",
                "Принтер Canon": "USER_DEVICES/Canon.png",
                "IP-телефон Grandstream": "USER_DEVICES/Grandstream.png",
                "Серверная стойка": "USER_DEVICES/servernaya_stoyka.png",
                "Копировальный аппарат": "USER_DEVICES/copier.png",
                "Локальный сервер": "USER_DEVICES/local_server.png",
                "Платёжный терминал": "USER_DEVICES/payment.png",
                "Промышленный ПК": "USER_DEVICES/pc_prom.png",
                "Информационный киоск": "USER_DEVICES/info_kiosk.png",
                "Диспетчерская консоль": "USER_DEVICES/dispetcer_console.png",
                "Ноутбук HP": "USER_DEVICES/HP.png",
                "Персональный компьютер": "USER_DEVICES/pc.png",
                "Монитор": "USER_DEVICES/monitor.png",
                "Клавиатура": "USER_DEVICES/keyboard.png",
                "Мышь": "USER_DEVICES/mouse.png",
                "Сканер": "USER_DEVICES/skaner.png",
                "МФУ": "USER_DEVICES/mfu.png",
                "Проектор": "USER_DEVICES/projector.png",
                "Админ-панель": "USER_DEVICES/admin_panel.png",
                "Табло аэропорта": "USER_DEVICES/airport_board.png",
                "Тонкий клиент": "USER_DEVICES/line_client.png",
                "Мини-ПК": "USER_DEVICES/mini_pc.png",
                "Промышленный планшет": "USER_DEVICES/planshet_prom.png"
            };

            // Иконки сетевого оборудования
            const NETWORK_ICONS = {
                "WiFi Controller": "NETWORK/wifi_controller.png",
                "Access Point": "NETWORK/access_point.png",
                "Access Switch": "NETWORK/access_switch.png",
                "POE Switch": "NETWORK/poe_switch.png",
                "Core Switch": "NETWORK/core_switch.png",
                "Distributor Switch": "NETWORK/distributor_switch.png",
                "Router": "NETWORK/router.png",
                "VPN Gateway": "NETWORK/vpn_shluz.png",
                "Firewall": "NETWORK/brandmauer.png",
                "NAT": "NETWORK/nat.png",
                "Proxy Server": "NETWORK/proxy_server.png",
                "VPN": "NETWORK/vpn.png",
                "IDS": "NETWORK/ids.png",
                "QoS": "NETWORK/qos.png",
                "DHCP": "NETWORK/DHCP.png",
                "DHCP Relay": "NETWORK/DHCP_relay.png",
                "DNS Server": "NETWORK/DNS_server.png",
                "NTP Server": "NETWORK/NTP_server.png",
                "Log Database": "NETWORK/log_database.png",
                "Remote Authentication Service": "NETWORK/Remote_Authentication_Service.png",
                "Server Management": "NETWORK/server_management.png",
                "Monitoring Network": "NETWORK/monitoring_network.png",
                "Network TAP": "NETWORK/network_tap.png",
                "SNMP": "NETWORK/snmp.png",
                "Cross Connect": "NETWORK/cross_connect.png",
                "Patch Panel": "NETWORK/patch_panel.png",
                "RJ45": "NETWORK/rj45.png",
                "Net Cable": "NETWORK/net_cabel.png",
                "Optic Cable": "NETWORK/optic_cabel.png",
                "Optic Transiver": "NETWORK/optic_transiver.png",
                "LC": "NETWORK/lc.png",
                "SC": "NETWORK/sc.png",
                "Video Convertor": "NETWORK/video_convertor.png",
                "Routing Protocol": "NETWORK/routing_protocol.png",
                "Subnet": "NETWORK/subnet.png",
                "VLAN": "NETWORK/VLAN.png"
            };
            
            const ASSET_SIZES = {
                "Стол": 80,
                "Стул": 40,
                "Шкаф": 60,
                "Кресло": 50,
                "Рабочая станция": 70,
                "Принтер Canon": 45,
                "IP-телефон Grandstream": 35,
                "Серверная стойка": 70,
                "Копировальный аппарат": 55,
                "Локальный сервер": 65,
                "Платёжный терминал": 50,
                "Промышленный ПК": 60,
                "Информационный киоск": 80,
                "Диспетчерская консоль": 70,
                "Ноутбук HP": 40,
                "Персональный компьютер": 45,
                "Монитор": 50,
                "Клавиатура": 30,
                "Мышь": 25,
                "Сканер": 50,
                "МФУ": 60,
                "Проектор": 55,
                "Админ-панель": 50,
                "Табло аэропорта": 90,
                "Тонкий клиент": 35,
                "Мини-ПК": 30,
                "Промышленный планшет": 45,
                // Сетевое оборудование
                "WiFi Controller": 50,
                "Access Point": 45,
                "Access Switch": 60,
                "POE Switch": 60,
                "Core Switch": 65,
                "Distributor Switch": 60,
                "Router": 50,
                "VPN Gateway": 55,
                "Firewall": 60,
                "NAT": 50,
                "Proxy Server": 55,
                "VPN": 50,
                "IDS": 55,
                "QoS": 50,
                "DHCP": 45,
                "DHCP Relay": 45,
                "DNS Server": 45,
                "NTP Server": 45,
                "Log Database": 60,
                "Remote Authentication Service": 55,
                "Server Management": 50,
                "Monitoring Network": 50,
                "Network TAP": 40,
                "SNMP": 45,
                "Cross Connect": 40,
                "Patch Panel": 70,
                "RJ45": 30,
                "Net Cable": 25,
                "Optic Cable": 25,
                "Optic Transiver": 40,
                "LC": 30,
                "SC": 30,
                "Video Convertor": 45,
                "Routing Protocol": 45,
                "Subnet": 45,
                "VLAN": 45
            };
            
            const DEFAULT_COLORS = {
                "Стол": "#8BC34A",
                "Стул": "#FFC107",
                "Шкаф": "#607D8B",
                "Кресло": "#FF5722",
                "Рабочая станция": "#9C27B0",
                "Принтер Canon": "#B71C1C",
                "IP-телефон Grandstream": "#1A237E",
                "Серверная стойка": "#212121",
                "Копировальный аппарат": "#7B1FA2",
                "Локальный сервер": "#004D40",
                "Платёжный терминал": "#F57C00",
                "Промышленный ПК": "#1B5E20",
                "Информационный киоск": "#00838F",
                "Диспетчерская консоль": "#4A148C",
                "Ноутбук HP": "#004D40",
                "Персональный компьютер": "#1B5E20",
                "Монитор": "#01579B",
                "Клавиатура": "#616161",
                "Мышь": "#546E7A",
                "Сканер": "#F57C00",
                "МФУ": "#C2185B",
                "Проектор": "#00838F",
                "Админ-панель": "#37474F",
                "Табло аэропорта": "#006064",
                "Тонкий клиент": "#3E2723",
                "Мини-ПК": "#263238",
                "Промышленный планшет": "#4A148C",
                // Сетевое оборудование
                "WiFi Controller": "#1E88E5",
                "Access Point": "#1565C0",
                "Access Switch": "#0D47A1",
                "POE Switch": "#0D47A1",
                "Core Switch": "#001A73",
                "Distributor Switch": "#0D47A1",
                "Router": "#1565C0",
                "VPN Gateway": "#1E88E5",
                "Firewall": "#F50057",
                "NAT": "#AD1457",
                "Proxy Server": "#6A1B9A",
                "VPN": "#4527A0",
                "IDS": "#F57C00",
                "QoS": "#FF6F00",
                "DHCP": "#00838F",
                "DHCP Relay": "#00695C",
                "DNS Server": "#00838F",
                "NTP Server": "#00695C",
                "Log Database": "#C62828",
                "Remote Authentication Service": "#6A1B9A",
                "Server Management": "#7B1FA2",
                "Monitoring Network": "#4527A0",
                "Network TAP": "#1E88E5",
                "SNMP": "#1565C0",
                "Cross Connect": "#1E88E5",
                "Patch Panel": "#0D47A1",
                "RJ45": "#1565C0",
                "Net Cable": "#1E88E5",
                "Optic Cable": "#0D47A1",
                "Optic Transiver": "#1565C0",
                "LC": "#1E88E5",
                "SC": "#1565C0",
                "Video Convertor": "#FF6F00",
                "Routing Protocol": "#4527A0",
                "Subnet": "#6A1B9A",
                "VLAN": "#7B1FA2"
            };
            
            // Категории активов
            const ASSET_CATEGORIES = {
                "furniture": "Мебель",
                "device_fixed": "Устройства (напольные)",
                "device_movable": "Устройства (настольные)",
                "network_equipment": "Сетевое оборудование",
                "network_cables": "Сетевые кабели",
                "network_infrastructure": "Сетевая инфраструктура"
            };

            // Определение категории по типу
            const DEVICE_TO_CATEGORY = {
                // Мебель
                "Стол": "furniture",
                "Стул": "furniture",
                "Шкаф": "furniture",
                "Кресло": "furniture",
                // Настольные устройства
                "Рабочая станция": "device_movable",
                "Принтер Canon": "device_movable",
                "Персональный компьютер": "device_movable",
                "Монитор": "device_movable",
                "Клавиатура": "device_movable",
                "Мышь": "device_movable",
                "Сканер": "device_movable",
                "МФУ": "device_movable",
                "Проектор": "device_movable",
                "Ноутбук HP": "device_movable",
                "Мини-ПК": "device_movable",
                "Тонкий клиент": "device_movable",
                "Промышленный планшет": "device_movable",
                // Напольные устройства
                "IP-телефон Grandstream": "device_fixed",
                "Серверная стойка": "device_fixed",
                "Копировальный аппарат": "device_fixed",
                "Локальный сервер": "device_fixed",
                "Платёжный терминал": "device_fixed",
                "Промышленный ПК": "device_fixed",
                "Информационный киоск": "device_fixed",
                "Диспетчерская консоль": "device_fixed",
                "Админ-панель": "device_fixed",
                "Табло аэропорта": "device_fixed",
                // Сетевое оборудование
                "WiFi Controller": "network_equipment",
                "Access Point": "network_equipment",
                "Access Switch": "network_equipment",
                "POE Switch": "network_equipment",
                "Core Switch": "network_equipment",
                "Distributor Switch": "network_equipment",
                "Router": "network_equipment",
                "VPN Gateway": "network_equipment",
                "Firewall": "network_equipment",
                "NAT": "network_equipment",
                "Proxy Server": "network_equipment",
                "VPN": "network_equipment",
                "IDS": "network_equipment",
                "QoS": "network_equipment",
                "DHCP": "network_equipment",
                "DHCP Relay": "network_equipment",
                "DNS Server": "network_equipment",
                "NTP Server": "network_equipment",
                "Log Database": "network_equipment",
                "Remote Authentication Service": "network_equipment",
                "Server Management": "network_equipment",
                "Monitoring Network": "network_equipment",
                // Сетевые кабели
                "Net Cable": "network_cables",
                "Optic Cable": "network_cables",
                "RJ45": "network_cables",
                // Сетевая инфраструктура
                "Patch Panel": "network_infrastructure",
                "Cross Connect": "network_infrastructure",
                "Network TAP": "network_infrastructure",
                "Optic Transiver": "network_infrastructure",
                "LC": "network_infrastructure",
                "SC": "network_infrastructure"
            };
            
            const ASSET_STATUSES = {
                "active": { name: "Активно", color: "#4CAF50" },
                "repair": { name: "В ремонте", color: "#FF9800" },
                "storage": { name: "На складе", color: "#2196F3" },
                "written_off": { name: "Списано", color: "#9E9E9E" },
                "reserved": { name: "Резерв", color: "#9C27B0" }
            };
            
            const DEFAULT_ICON_SIZE = 64;
            const MIN_ICON_SIZE = 24;
            const MAX_ICON_SIZE = 256;
            
            const HOTKEYS = {
                F1: { action: 'showHelp', description: 'Показать помощь' },
                F2: { action: 'quickAdd', description: 'Быстрое добавление' },
                F3: { action: 'search', description: 'Фокус на поиск' },
                F4: { action: 'toggleResizeMode', description: 'Режим изменения размера' },
                F5: { action: 'refreshView', description: 'Обновить вид' },
                F6: { action: 'showStats', description: 'Показать статистику' },
                F7: { action: 'exportJSON', description: 'Экспорт JSON' },
                F8: { action: 'exportCSV', description: 'Экспорт CSV' },
                F9: { action: 'importData', description: 'Импорт данных' },
                F10: { action: 'toggleLeftPanel', description: 'Показать/скрыть левую панель' },
                F11: { action: 'toggleRightPanel', description: 'Показать/скрыть правую панель' },
                F12: { action: 'fullscreen', description: 'Полноэкранный режим' },
                'Alt+1': { action: 'selectFloorMain', description: 'Главная схема' },
                'Alt+2': { action: 'selectFloorFirst', description: 'Первый этаж' },
                'Alt+3': { action: 'selectFloorSecond', description: 'Второй этаж' },
                'Alt+F': { action: 'tabFurniture', description: 'Вкладка Мебель' },
                'Alt+X': { action: 'tabFixed', description: 'Вкладка Напольные' },
                'Alt+M': { action: 'tabMovable', description: 'Вкладка Настольные' },
                'Alt+N': { action: 'tabNetwork', description: 'Вкладка Сеть' },
                'Ctrl+1': { action: 'tabDetails', description: 'Вкладка Детали' },
                'Ctrl+2': { action: 'tabHistory', description: 'Вкладка История' },
                'Ctrl+3': { action: 'tabActions', description: 'Вкладка Действия' },
                'Ctrl+Shift+F': { action: 'focusFilter', description: 'Фокус на фильтр' },
                'Ctrl+Enter': { action: 'submitModal', description: 'Подтвердить в модальном окне' },
                'Esc': { action: 'closeModal', description: 'Закрыть модальное окно' },
                'Space': { action: 'panMode', description: 'Режим панорамы (удерживать)' }
            };
            
            const COLOR_PALETTE = [
                { name: 'Синий', color: '#2196F3' },
                { name: 'Красный', color: '#F44336' },
                { name: 'Зеленый', color: '#4CAF50' },
                { name: 'Желтый', color: '#FFC107' },
                { name: 'Фиолетовый', color: '#9C27B0' },
                { name: 'Оранжевый', color: '#FF9800' },
                { name: 'Голубой', color: '#00BCD4' },
                { name: 'Серый', color: '#9E9E9E' },
                { name: 'Розовый', color: '#E91E63' },
                { name: 'Бирюзовый', color: '#009688' },
                { name: 'Коричневый', color: '#795548' },
                { name: 'Белый', color: '#FFFFFF' }
            ];
            
            let appState = {
                currentFloor: "Второй этаж",
                currentRoom: null,
                viewMode: "floor",
                selectedAssetId: null,
                pendingAssetType: null,
                resizeMode: false,
                assets: {},
                lastAssetId: 0,
                dragState: null,
                resizeState: null,
                zoomLevel: 1.0,
                panOffset: { x: 0, y: 0 },
                isPanning: false,
                lastMousePos: { x: 0, y: 0 },
                hoveredAssetId: null,
                isSpacePressed: false,
                assetPositions: {} // ИСПРАВЛЕНО: Храним реальные позиции
            };
            
            let undoStack = [];
            let redoStack = [];
            let actionHistory = [];
            let autoSaveTimer;
            let searchTimeout;
            
            function generateUUID() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            }
            
            window.addEventListener('error', function(e) {
                console.error('Get error:', e.error);
                showToast('ERORR', 'error');
            });

            function showToast(message, type = 'info', duration = 3000) {
                const toast = document.createElement('div');
                toast.className = `toast-notification ${type}`;
                toast.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
                        <span>${message}</span>
                    </div>
                `;
                document.body.appendChild(toast);
                
                setTimeout(() => {
                    toast.style.animation = 'slideIn 0.3s reverse';
                    setTimeout(() => toast.remove(), 300);
                }, duration);
            }

            function showLoading() {
                const existingLoader = document.getElementById('global-loader');
                if (existingLoader) return;
                
                const loader = document.createElement('div');
                loader.id = 'global-loader';
                loader.className = 'global-loader';
                loader.innerHTML = '<div class="spinner"></div>';
                document.body.appendChild(loader);
            }

            function hideLoading() {
                const loader = document.getElementById('global-loader');
                if (loader) loader.remove();
            }

            function validateAssetData(data) {
                const errors = {};
                
                if (!data.type) {
                    errors.type = 'Не выбран тип оборудования';
                }
                
                if (!data.inventory_number || data.inventory_number.trim() === '') {
                    errors.inventory_number = 'Инвентарный номер обязателен';
                }
                
                if (!data.model || data.model.trim() === '') {
                    errors.model = 'Модель обязательна';
                }
                
                if (data.sum !== undefined && data.sum < 0) {
                    errors.sum = 'Сумма не может быть отрицательной';
                }
                
                if (!data.responsible || data.responsible.trim() === '') {
                    errors.responsible = 'Ответственный обязателен';
                }
                
                return {
                    isValid: Object.keys(errors).length === 0,
                    errors: errors
                };
            }

            function showValidationErrors(errors, prefix = '') {
                document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
                document.querySelectorAll('.form-control').forEach(el => el.classList.remove('validation-error'));
                
                for (const [field, message] of Object.entries(errors)) {
                    const errorElement = document.getElementById(prefix + field + 'Error');
                    const inputElement = document.getElementById(prefix + field);
                    
                    if (errorElement) {
                        errorElement.textContent = message;
                    }
                    
                    if (inputElement) {
                        inputElement.classList.add('validation-error');
                    }
                }
            }

            function scheduleAutoSave() {
                clearTimeout(autoSaveTimer);
                autoSaveTimer = setTimeout(() => {
                    saveToLocalStorage();
                    
                    const indicator = document.createElement('div');
                    indicator.className = 'auto-save-indicator';
                    indicator.innerHTML = '<i class="fas fa-save"></i> Автосохранение...';
                    document.body.appendChild(indicator);
                    
                    setTimeout(() => {
                        indicator.remove();
                    }, 3000);
                }, 30000);
            }

            function pushToUndo(action, data) {
                undoStack.push({
                    action: action,
                    data: JSON.parse(JSON.stringify(data)),
                    timestamp: new Date().toISOString()
                });
                
                if (undoStack.length > 50) {
                    undoStack.shift();
                }
                
                redoStack = [];
                updateUndoRedoButtons();
                logAction(action, data);
            }

            function undoLastAction() {
                if (undoStack.length === 0) {
                    showToast('Нет действий для отмены', 'warning');
                    return;
                }
                
                const lastAction = undoStack.pop();
                redoStack.push(lastAction);
                
                switch (lastAction.action) {
                    case 'create':
                        deleteAsset(lastAction.data.assetId, true);
                        break;
                    case 'delete':
                        appState.assets[lastAction.data.assetId] = lastAction.data.assetData;
                        if (appState.viewMode === 'room' && appState.currentRoom === lastAction.data.assetData.room_id) {
                            drawRoomAssets(appState.currentRoom);
                        }
                        break;
                    case 'update':
                        appState.assets[lastAction.data.assetId] = lastAction.data.oldData;
                        if (appState.viewMode === 'room' && appState.currentRoom === lastAction.data.oldData.room_id) {
                            drawRoomAssets(appState.currentRoom);
                        }
                        break;
                    case 'move':
                    case 'resize':
                        appState.assets[lastAction.data.assetId] = lastAction.data.oldData;
                        if (appState.viewMode === 'room' && appState.currentRoom === lastAction.data.oldData.room_id) {
                            drawRoomAssets(appState.currentRoom);
                        }
                        break;
                }
                
                updateAssetTree();
                if (appState.currentRoom) {
                    updateRoomStats(appState.currentRoom);
                }
                if (appState.selectedAssetId) {
                    updateAssetDetails(appState.selectedAssetId);
                }
                
                updateUndoRedoButtons();
                showToast('Действие отменено', 'success');
                scheduleAutoSave();
            }

            function redoLastAction() {
                if (redoStack.length === 0) {
                    showToast('Нет действий для повтора', 'warning');
                    return;
                }
                
                const actionToRedo = redoStack.pop();
                undoStack.push(actionToRedo);
                
                switch (actionToRedo.action) {
                    case 'create':
                        appState.assets[actionToRedo.data.assetId] = actionToRedo.data.assetData;
                        if (appState.viewMode === 'room' && appState.currentRoom === actionToRedo.data.assetData.room_id) {
                            drawRoomAssets(appState.currentRoom);
                        }
                        break;
                    case 'delete':
                        deleteAsset(actionToRedo.data.assetId, true);
                        break;
                    case 'update':
                        appState.assets[actionToRedo.data.assetId] = actionToRedo.data.newData;
                        if (appState.viewMode === 'room' && appState.currentRoom === actionToRedo.data.newData.room_id) {
                            drawRoomAssets(appState.currentRoom);
                        }
                        break;
                    case 'move':
                    case 'resize':
                        appState.assets[actionToRedo.data.assetId] = actionToRedo.data.newData;
                        if (appState.viewMode === 'room' && appState.currentRoom === actionToRedo.data.newData.room_id) {
                            drawRoomAssets(appState.currentRoom);
                        }
                        break;
                }
                
                updateAssetTree();
                if (appState.currentRoom) {
                    updateRoomStats(appState.currentRoom);
                }
                if (appState.selectedAssetId) {
                    updateAssetDetails(appState.selectedAssetId);
                }
                
                updateUndoRedoButtons();
                showToast('Действие повторено', 'success');
                scheduleAutoSave();
            }

            function updateUndoRedoButtons() {
                document.getElementById('undoButton').disabled = undoStack.length === 0;
                document.getElementById('redoButton').disabled = redoStack.length === 0;
            }

            function logAction(action, data) {
                const logEntry = {
                    timestamp: new Date().toISOString(),
                    action: action,
                    data: data,
                    user: 'current_user'
                };
                console.log('[ACTION]', logEntry);
            }

            function initApp() {
                try {
                    console.log(`${APP_NAME} v${VERSION} запущено`);
                    showLoading();
                    
                    loadFromLocalStorage();
                    populateItemLists();
                    loadFloorPlan();
                    setupEventListeners();
                    setupHotkeyHandlers();
                    updateUI();
                    
                    showStatus("Приложение запущено", 3000);
                    showToast(`${APP_NAME} v${VERSION} загружен`, 'success');
                    
                    hideLoading();
                } catch (error) {
                    console.error('Ошибка инициализации:', error);
                    showToast('Ошибка при запуске приложения', 'error');
                    hideLoading();
                }
            }
            
            function setupHotkeyHandlers() {
                document.addEventListener('keydown', function(e) {
                    const key = e.key;
                    const ctrl = e.ctrlKey;
                    const alt = e.altKey;
                    const shift = e.shiftKey;
                    
                    // F-клавиши
                    if (!ctrl && !alt && !shift && key.startsWith('F')) {
                        e.preventDefault();
                        const fKey = parseInt(key.substring(1));
                        handleFKey(fKey);
                        return;
                    }
                    
                    // Alt+цифры для этажей
                    if (alt && !ctrl && !shift && ['1', '2', '3'].includes(key)) {
                        e.preventDefault();
                        const floorMap = { '1': 'Главная схема', '2': 'Первый этаж', '3': 'Второй этаж' };
                        const floorSelect = document.getElementById('floorSelect');
                        if (floorSelect) {
                            floorSelect.value = floorMap[key];
                            floorSelect.dispatchEvent(new Event('change'));
                            showToast(`Переключен на ${floorMap[key]}`, 'info');
                        }
                        return;
                    }
                    
                    // Alt+F, Alt+X, Alt+M, Alt+N для вкладок
                    if (alt && !ctrl && !shift) {
                        if (key.toLowerCase() === 'f') {
                            e.preventDefault();
                            document.querySelector('.tab[data-tab="furniture"]').click();
                        } else if (key.toLowerCase() === 'x') {
                            e.preventDefault();
                            document.querySelector('.tab[data-tab="fixed"]').click();
                        } else if (key.toLowerCase() === 'm') {
                            e.preventDefault();
                            document.querySelector('.tab[data-tab="movable"]').click();
                        } else if (key.toLowerCase() === 'n') {
                            e.preventDefault();
                            document.querySelector('.tab[data-tab="network"]').click();
                        }
                        return;
                    }
                    
                    // Ctrl+1,2,3 для вкладок информации
                    if (ctrl && !alt && !shift && ['1', '2', '3'].includes(key)) {
                        e.preventDefault();
                        const tabMap = { '1': 'details', '2': 'history', '3': 'actions' };
                        switchInfoTab(tabMap[key]);
                        return;
                    }
                    
                    // Ctrl+Shift+F для фильтра
                    if (ctrl && shift && key.toLowerCase() === 'f') {
                        e.preventDefault();
                        document.getElementById('filterSelect').focus();
                        return;
                    }
                    
                    // Ctrl+F для поиска
                    if (ctrl && !alt && !shift && key.toLowerCase() === 'f') {
                        e.preventDefault();
                        document.getElementById('searchInput').focus();
                        document.getElementById('searchInput').select();
                        return;
                    }
                    
                    // Ctrl+S - сохранение
                    if (ctrl && !alt && !shift && key.toLowerCase() === 's') {
                        e.preventDefault();
                        saveToLocalStorage();
                        showToast('Сохранено', 'success');
                        return;
                    }
                    
                    // Ctrl+Z - отмена
                    if (ctrl && !alt && !shift && key.toLowerCase() === 'z') {
                        e.preventDefault();
                        undoLastAction();
                        return;
                    }
                    
                    // Ctrl+Y - повтор
                    if (ctrl && !alt && !shift && key.toLowerCase() === 'y') {
                        e.preventDefault();
                        redoLastAction();
                        return;
                    }
                    
                    // Delete - удаление
                    if (key === 'Delete' && appState.selectedAssetId) {
                        e.preventDefault();
                        if (confirm('Удалить выбранный актив?')) {
                            deleteAsset(appState.selectedAssetId);
                        }
                        return;
                    }
                    
                    // Ctrl+A - прикрепление
                    if (ctrl && !alt && !shift && key.toLowerCase() === 'a' && appState.selectedAssetId) {
                        e.preventDefault();
                        showAttachModal();
                        return;
                    }
                    
                    // Ctrl+D - открепление
                    if (ctrl && !alt && !shift && key.toLowerCase() === 'd' && appState.selectedAssetId) {
                        e.preventDefault();
                        detachDevice(appState.selectedAssetId);
                        return;
                    }
                    
                    // Ctrl+G - изменение цвета
                    if (ctrl && !alt && !shift && key.toLowerCase() === 'g' && appState.selectedAssetId) {
                        e.preventDefault();
                        showColorModal();
                        return;
                    }
                    
                    // Ctrl+Shift+R - режим изменения размера
                    if (ctrl && shift && key.toLowerCase() === 'r') {
                        e.preventDefault();
                        toggleResizeMode();
                        return;
                    }
                    
                    // Ctrl+Shift+S - изменение статуса
                    if (ctrl && shift && key.toLowerCase() === 's' && appState.selectedAssetId) {
                        e.preventDefault();
                        showStatusModal();
                        return;
                    }
                    
                    // Ctrl+J - экспорт JSON
                    if (ctrl && !alt && !shift && key.toLowerCase() === 'j') {
                        e.preventDefault();
                        exportToJSON();
                        return;
                    }
                    
                    // Ctrl+K - экспорт CSV
                    if (ctrl && !alt && !shift && key.toLowerCase() === 'k') {
                        e.preventDefault();
                        exportToCSV();
                        return;
                    }
                    
                    // Ctrl+I - импорт данных
                    if (ctrl && !alt && !shift && key.toLowerCase() === 'i') {
                        e.preventDefault();
                        showModal('importModal');
                        return;
                    }
                    
                    // Ctrl+T - статистика
                    if (ctrl && !alt && !shift && key.toLowerCase() === 't') {
                        e.preventDefault();
                        showStatsModal();
                        return;
                    }
                    
                    // Ctrl+E - редактировать
                    if (ctrl && !alt && !shift && key.toLowerCase() === 'e' && appState.selectedAssetId) {
                        e.preventDefault();
                        showEditAssetModal();
                        return;
                    }
                    
                    // Пробел для режима панорамы
                    if (key === ' ' && !appState.isPanning && appState.viewMode === 'floor') {
                        e.preventDefault();
                        appState.isSpacePressed = true;
                        const floorPlan = document.getElementById('floorPlan');
                        if (floorPlan) floorPlan.style.cursor = 'grab';
                    }
                    
                    // Escape - закрыть модальное окно
                    if (key === 'Escape') {
                        const activeModal = document.querySelector('.modal.active');
                        if (activeModal) {
                            e.preventDefault();
                            hideModal(activeModal.id);
                        }
                        
                        const contextMenu = document.getElementById('contextMenu');
                        if (contextMenu && contextMenu.classList.contains('active')) {
                            contextMenu.classList.remove('active');
                        }
                        
                        if (appState.viewMode === 'room' && appState.currentRoom) {
                            const backButton = document.getElementById('backButton');
                            if (backButton && backButton.style.display !== 'none') {
                                backButton.click();
                            }
                        }
                    }
                    
                    // Ctrl+Enter в модальном окне
                    if (ctrl && !alt && !shift && key === 'Enter') {
                        const activeModal = document.querySelector('.modal.active');
                        if (activeModal) {
                            e.preventDefault();
                            const saveButton = activeModal.querySelector('.modal-footer .button:last-child');
                            if (saveButton) {
                                saveButton.click();
                            }
                        }
                    }
                    
                    // Enter в модальном окне подтверждения
                    if (key === 'Enter' && !ctrl && !alt && !shift) {
                        const activeModal = document.querySelector('.modal.active');
                        if (activeModal && activeModal.id !== 'addAssetModal' && activeModal.id !== 'editAssetModal') {
                            e.preventDefault();
                            const saveButton = activeModal.querySelector('.modal-footer .button:last-child');
                            if (saveButton) {
                                saveButton.click();
                            }
                        }
                    }
                });
                
                document.addEventListener('keyup', function(e) {
                    if (e.key === ' ') {
                        appState.isSpacePressed = false;
                        const floorPlan = document.getElementById('floorPlan');
                        if (floorPlan && !appState.isPanning) {
                            floorPlan.style.cursor = 'move';
                        }
                    }
                });
            }
            
            function handleFKey(fKey) {
                switch(fKey) {
                    case 1:
                        showHelp();
                        break;
                    case 2:
                        if (appState.currentRoom) {
                            const floorPlan = document.getElementById('floorPlan');
                            if (floorPlan) {
                                const rect = floorPlan.getBoundingClientRect();
                                const x = rect.width / 2;
                                const y = rect.height / 2;
                                
                                const quickPosition = document.getElementById('quickPosition');
                                if (quickPosition) {
                                    quickPosition.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
                                }
                                showModal('quickAddModal');
                            }
                        } else {
                            showToast('Сначала выберите комнату', 'warning');
                        }
                        break;
                    case 3:
                        document.getElementById('searchInput').focus();
                        document.getElementById('searchInput').select();
                        break;
                    case 4:
                        toggleResizeMode();
                        break;
                    case 5:
                        refreshView();
                        break;
                    case 6:
                        showStatsModal();
                        break;
                    case 7:
                        exportToJSON();
                        break;
                    case 8:
                        exportToCSV();
                        break;
                    case 9:
                        showModal('importModal');
                        break;
                    case 10:
                        toggleLeftPanel();
                        break;
                    case 11:
                        toggleRightPanel();
                        break;
                    case 12:
                        toggleFullscreen();
                        break;
                    default:
                        showToast(`F${fKey} - нет назначенного действия`, 'info');
                }
            }
            
            function showHelp() {
                let helpHtml = '<div style="max-height: 500px; overflow-y: auto;">';
                helpHtml += '<h3 style="color: var(--primary-light); margin-bottom: 15px;">Горячие клавиши</h3>';
                helpHtml += '<table style="width: 100%; border-collapse: collapse;">';
                helpHtml += '<tr><th style="text-align: left; padding: 5px; border-bottom: 1px solid var(--border);">Клавиша</th><th style="text-align: left; padding: 5px; border-bottom: 1px solid var(--border);">Действие</th></tr>';
                
                const hotkeysList = [
                    ['F1', 'Помощь'],
                    ['F2', 'Быстрое добавление'],
                    ['F3', 'Фокус на поиск'],
                    ['F4', 'Режим изменения размера'],
                    ['F5', 'Обновить вид'],
                    ['F6', 'Статистика'],
                    ['F7', 'Экспорт JSON'],
                    ['F8', 'Экспорт CSV'],
                    ['F9', 'Импорт данных'],
                    ['F10', 'Показать/скрыть левую панель'],
                    ['F11', 'Показать/скрыть правую панель'],
                    ['F12', 'Полноэкранный режим'],
                    ['Alt+1', 'Главная схема'],
                    ['Alt+2', 'Первый этаж'],
                    ['Alt+3', 'Второй этаж'],
                    ['Alt+F', 'Вкладка Мебель'],
                    ['Alt+X', 'Вкладка Напольные'],
                    ['Alt+M', 'Вкладка Настольные'],
                    ['Ctrl+1', 'Вкладка Детали'],
                    ['Ctrl+2', 'Вкладка История'],
                    ['Ctrl+3', 'Вкладка Действия'],
                    ['Ctrl+S', 'Сохранить'],
                    ['Ctrl+Z', 'Отмена'],
                    ['Ctrl+Y', 'Повтор'],
                    ['Ctrl+F', 'Поиск'],
                    ['Ctrl+Shift+F', 'Фокус на фильтр'],
                    ['Del', 'Удалить выбранное'],
                    ['Ctrl+A', 'Прикрепить'],
                    ['Ctrl+D', 'Открепить'],
                    ['Ctrl+G', 'Изменить цвет'],
                    ['Ctrl+Shift+R', 'Режим изменения размера'],
                    ['Ctrl+Shift+S', 'Изменить статус'],
                    ['Ctrl+E', 'Редактировать'],
                    ['Ctrl+J', 'Экспорт JSON'],
                    ['Ctrl+K', 'Экспорт CSV'],
                    ['Ctrl+I', 'Импорт'],
                    ['Ctrl+T', 'Статистика'],
                    ['Esc', 'Назад / Закрыть'],
                    ['Пробел', 'Режим панорамы (удерживать)']
                ];
                
                hotkeysList.sort((a, b) => a[0].localeCompare(b[0]));
                
                hotkeysList.forEach(([key, desc]) => {
                    helpHtml += `<tr><td style="padding: 5px; border-bottom: 1px solid var(--border);"><kbd style="background-color: var(--button); padding: 2px 5px; border-radius: 3px;">${key}</kbd></td><td style="padding: 5px; border-bottom: 1px solid var(--border);">${desc}</td></tr>`;
                });
                
                helpHtml += '</table></div>';
                
                const modalBody = document.createElement('div');
                modalBody.innerHTML = helpHtml;
                
                const modal = document.createElement('div');
                modal.className = 'modal active';
                modal.id = 'helpModal';
                modal.innerHTML = `
                    <div class="modal-content" style="max-width: 600px;">
                        <div class="modal-header">
                            <div class="modal-title">Горячие клавиши</div>
                            <button class="modal-close" onclick="this.closest('.modal').remove()">&times;</button>
                        </div>
                        <div class="modal-body"></div>
                        <div class="modal-footer">
                            <button class="button" onclick="this.closest('.modal').remove()">Закрыть (Esc)</button>
                        </div>
                    </div>
                `;
                
                modal.querySelector('.modal-body').appendChild(modalBody);
                document.body.appendChild(modal);
            }
            
            function toggleLeftPanel() {
                const leftPanel = document.querySelector('.left-panel');
                if (leftPanel) {
                    if (leftPanel.style.display === 'none') {
                        leftPanel.style.display = 'flex';
                    } else {
                        leftPanel.style.display = 'none';
                    }
                }
            }
            
            function toggleRightPanel() {
                const rightPanel = document.querySelector('.right-panel');
                if (rightPanel) {
                    if (rightPanel.style.display === 'none') {
                        rightPanel.style.display = 'flex';
                    } else {
                        rightPanel.style.display = 'none';
                    }
                }
            }
            
            function toggleFullscreen() {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                }
            }
            
            function loadFromLocalStorage() {
                try {
                    const savedData = localStorage.getItem('inventoryData_v5');
                    if (savedData) {
                        if (savedData.length > 5 * 1024 * 1024) {
                            console.warn('Данные слишком большие, возможны проблемы с производительностью');
                            showToast('Данные слишком большие', 'warning');
                        }
                        
                        const data = JSON.parse(savedData);
                        appState.assets = data.assets || {};
                        appState.currentFloor = data.currentFloor || "Второй этаж";
                        appState.currentRoom = data.currentRoom || null;
                        actionHistory = data.history || [];
                        
                        console.log(`Загружено ${Object.keys(appState.assets).length} активов`);
                    }
                } catch (e) {
                    console.error("Ошибка загрузки данных:", e);
                    showToast('Ошибка загрузки данных из localStorage', 'error');
                    appState.assets = {};
                }
                
                const lastFloor = localStorage.getItem('lastFloor');
                if (lastFloor) {
                    appState.currentFloor = lastFloor;
                    const floorSelect = document.getElementById('floorSelect');
                    if (floorSelect) {
                        floorSelect.value = lastFloor;
                    }
                }
            }
            
            function saveToLocalStorage() {
                try {
                    const data = {
                        assets: appState.assets,
                        currentFloor: appState.currentFloor,
                        currentRoom: appState.currentRoom,
                        history: actionHistory,
                        timestamp: new Date().toISOString()
                    };
                    
                    const serialized = JSON.stringify(data);
                    
                    if (serialized.length > 5 * 1024 * 1024) {
                        showToast('Данные слишком большие для сохранения', 'error');
                        return false;
                    }
                    
                    localStorage.setItem('inventoryData_v5', serialized);
                    localStorage.setItem('lastFloor', appState.currentFloor);
                    
                    console.log("Данные сохранены");
                    showStatus("Данные сохранены", 2000);
                    return true;
                } catch (e) {
                    console.error("Ошибка сохранения данных:", e);
                    
                    if (e.name === 'QuotaExceededError') {
                        showToast('Превышен лимит хранилища', 'error');
                    } else {
                        showToast('Ошибка сохранения данных', 'error');
                    }
                    
                    return false;
                }
            }
            
            function addToHistory(action, assetId, details = {}) {
                const asset = appState.assets[assetId];
                const historyEntry = {
                    id: generateUUID(),
                    action: action,
                    assetId: assetId,
                    assetType: asset ? asset.type : 'Неизвестно',
                    details: details,
                    user: 'admin',
                    date: new Date().toISOString()
                };

                actionHistory.unshift(historyEntry);
                
                if (actionHistory.length > 50) {
                    actionHistory = actionHistory.slice(0, 50);
                }
                
                updateHistoryList();

                // Отправка действия в базу данных
                logActionToServer(action, assetId, details);
            }

            async function logActionToServer(action, assetId, details) {
                try {
                    const token = localStorage.getItem('token');
                    if (!token) return;

                    const response = await fetch('/admin/log-action', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            action: `asset_${action}`,
                            assetId: assetId,
                            details: details
                        })
                    });

                    if (!response.ok) {
                        console.warn('Failed to log action to server:', response.status);
                    }
                } catch (error) {
                    console.warn('Error logging action to server:', error);
                }
            }
            
            function updateHistoryList() {
                const historyList = document.getElementById('historyList');
                if (!historyList) return;
                
                historyList.innerHTML = '';
                
                if (actionHistory.length === 0) {
                    historyList.innerHTML = '<div class="text-muted text-center">Нет записей в истории</div>';
                    return;
                }
                
                actionHistory.forEach(record => {
                    const date = new Date(record.date);
                    const formattedDate = date.toLocaleString('ru-RU', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                    
                    let actionText = '';
                    switch (record.action) {
                        case 'create': actionText = 'Создание'; break;
                        case 'update': actionText = 'Обновление'; break;
                        case 'delete': actionText = 'Удаление'; break;
                        case 'attach': actionText = 'Прикрепление'; break;
                        case 'detach': actionText = 'Открепление'; break;
                        case 'color': actionText = 'Изменение цвета'; break;
                        case 'status': actionText = 'Изменение статуса'; break;
                        case 'move': actionText = 'Перемещение'; break;
                        case 'resize': actionText = 'Изменение размера'; break;
                        default: actionText = record.action;
                    }
                    
                    const item = document.createElement('div');
                    item.className = 'history-item';
                    item.innerHTML = `
                        <div class="history-date">${formattedDate}</div>
                        <div class="history-action">${actionText}</div>
                        <div>Объект: ${record.assetType}</div>
                        ${record.details ? `<div style="font-size: 11px; color: var(--text-secondary);">${JSON.stringify(record.details)}</div>` : ''}
                    `;
                    historyList.appendChild(item);
                });
            }
            
            function populateItemLists() {
                // Мебель
                const furnitureTypes = ["Стол", "Стул", "Шкаф", "Кресло", "Рабочая станция"];
                const furnitureContainer = document.getElementById('furnitureItems');
                if (!furnitureContainer) return;
                
                furnitureContainer.innerHTML = '';
                
                furnitureTypes.forEach((item, index) => {
                    const div = document.createElement('div');
                    div.className = 'item';
                    div.dataset.type = item;
                    div.dataset.hotkey = `F${index + 1}`;
                    
                    const iconFile = USER_DEVICES_ICONS[item];
                    let iconHtml = '';
                    if (iconFile) {
                        iconHtml = `<img src="${iconFile}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.style.display='none';">`;
                    } else {
                        iconHtml = `<i class="fas fa-cube" style="font-size: 24px;"></i>`;
                    }
                    
                    div.innerHTML = `
                        <div class="item-icon">
                            ${iconHtml}
                        </div>
                        <div class="item-text">${item}</div>
                    `;
                    furnitureContainer.appendChild(div);
                });
                
                // Напольные устройства
                const fixedItems = [
                    "Принтер Canon", "IP-телефон Grandstream", "Серверная стойка", "Копировальный аппарат",
                    "Локальный сервер", "Платёжный терминал", "Промышленный ПК", "Информационный киоск",
                    "Диспетчерская консоль"
                ];
                const fixedContainer = document.getElementById('fixedItems');
                if (fixedContainer) {
                    fixedContainer.innerHTML = '';
                    fixedItems.forEach((item, index) => {
                        const div = document.createElement('div');
                        div.className = 'item';
                        div.dataset.type = item;
                        div.dataset.hotkey = `F${index + 6}`;
                        
                        const iconFile = USER_DEVICES_ICONS[item];
                        let iconHtml = '';
                        if (iconFile) {
                            iconHtml = `<img src="${iconFile}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.style.display='none';">`;
                        } else {
                            iconHtml = `<i class="fas fa-print" style="font-size: 24px;"></i>`;
                        }
                        
                        div.innerHTML = `
                            <div class="item-icon">
                                ${iconHtml}
                            </div>
                            <div class="item-text">${item}</div>
                        `;
                        fixedContainer.appendChild(div);
                    });
                }
                
                // Настольные устройства
                const movableItems = [
                    "Ноутбук HP", "Персональный компьютер", "Монитор", "Клавиатура", "Мышь", "Сканер", "МФУ", 
                    "Проектор", "Админ-панель", "Табло аэропорта", "Тонкий клиент", "Мини-ПК",
                    "Промышленный планшет"
                ];
                const movableContainer = document.getElementById('movableItems');
                if (movableContainer) {
                    movableContainer.innerHTML = '';
                    movableItems.forEach((item, index) => {
                        const div = document.createElement('div');
                        div.className = 'item';
                        div.dataset.type = item;
                        div.dataset.hotkey = `F${index + 15}`;
                        
                        const iconFile = USER_DEVICES_ICONS[item];
                        let iconHtml = '';
                        if (iconFile) {
                            iconHtml = `<img src="${iconFile}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.style.display='none';">`;
                        } else {
                            iconHtml = `<i class="fas fa-laptop" style="font-size: 24px;"></i>`;
                        }
                        
                        div.innerHTML = `
                            <div class="item-icon">
                                ${iconHtml}
                            </div>
                            <div class="item-text">${item}</div>
                        `;
                        movableContainer.appendChild(div);
                    });
                }
                
                // Сетевое оборудование
                const networkItems = Object.keys(NETWORK_ICONS);
                const networkContainer = document.getElementById('networkItems');
                if (networkContainer) {
                    networkContainer.innerHTML = '';
                    networkItems.forEach((item, index) => {
                        const div = document.createElement('div');
                        div.className = 'item';
                        div.dataset.type = item;
                        
                        const iconFile = NETWORK_ICONS[item];
                        let iconHtml = '';
                        if (iconFile) {
                            iconHtml = `<img src="${iconFile}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.style.display='none';">`;
                        } else {
                            iconHtml = `<i class="fas fa-wifi" style="font-size: 24px;"></i>`;
                        }
                        
                        div.innerHTML = `
                            <div class="item-icon">
                                ${iconHtml}
                            </div>
                            <div class="item-text">${item}</div>
                        `;
                        networkContainer.appendChild(div);
                    });
                }
                
                populateSelectLists();
            }
            
            function populateSelectLists() {
                const assetTypeSelect = document.getElementById('assetType');
                if (!assetTypeSelect) return;
                
                assetTypeSelect.innerHTML = '';
                
                // Мебель
                const furnitureOptgroup = document.createElement('optgroup');
                furnitureOptgroup.label = "Мебель";
                const furnitureItems = ["Стол", "Стул", "Шкаф", "Кресло", "Рабочая станция"];
                furnitureItems.forEach(item => {
                    const option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;
                    furnitureOptgroup.appendChild(option);
                });
                assetTypeSelect.appendChild(furnitureOptgroup);
                
                // Напольные устройства
                const fixedOptgroup = document.createElement('optgroup');
                fixedOptgroup.label = "Устройства (напольные)";
                const fixedItems = [
                    "Принтер Canon", "IP-телефон Grandstream", "Серверная стойка", "Копировальный аппарат",
                    "Локальный сервер", "Платёжный терминал", "Промышленный ПК", "Информационный киоск", 
                    "Диспетчерская консоль"
                ];
                fixedItems.forEach(item => {
                    const option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;
                    fixedOptgroup.appendChild(option);
                });
                assetTypeSelect.appendChild(fixedOptgroup);
                
                // Настольные устройства
                const movableOptgroup = document.createElement('optgroup');
                movableOptgroup.label = "Устройства (настольные)";
                const movableItems = [
                    "Ноутбук HP", "Персональный компьютер", "Монитор", "Клавиатура", "Мышь", "Сканер", "МФУ", 
                    "Проектор", "Админ-панель", "Табло аэропорта", "Тонкий клиент", "Мини-ПК", 
                    "Промышленный планшет"
                ];
                movableItems.forEach(item => {
                    const option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;
                    movableOptgroup.appendChild(option);
                });
                assetTypeSelect.appendChild(movableOptgroup);
                
                // Сетевое оборудование
                const networkOptgroup = document.createElement('optgroup');
                networkOptgroup.label = "Сетевое оборудование";
                Object.keys(NETWORK_ICONS).forEach(item => {
                    const option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;
                    networkOptgroup.appendChild(option);
                });
                assetTypeSelect.appendChild(networkOptgroup);
                
                // Быстрый диалог
                const quickTypeSelect = document.getElementById('quickType');
                if (quickTypeSelect) {
                    quickTypeSelect.innerHTML = '<option value="">-- Выберите тип --</option>';
                    
                    quickTypeSelect.appendChild(furnitureOptgroup.cloneNode(true));
                    quickTypeSelect.appendChild(fixedOptgroup.cloneNode(true));
                    quickTypeSelect.appendChild(movableOptgroup.cloneNode(true));
                    quickTypeSelect.appendChild(networkOptgroup.cloneNode(true));
                }
            }

            function loadFloorPlan() {
    try {
        const floorPlan = document.getElementById('floorPlan');
        if (!floorPlan) return;
        
        const planTitle = document.getElementById('planTitle');
        
        floorPlan.innerHTML = '';
        
        const imageFile = PLAN_FILES[appState.currentFloor];
        if (imageFile) {
            floorPlan.style.backgroundImage = `url('${imageFile}')`;
            floorPlan.style.backgroundSize = 'contain';
            floorPlan.style.backgroundRepeat = 'no-repeat';
            floorPlan.style.backgroundPosition = 'center';
        } else {
            floorPlan.style.backgroundColor = 'var(--graphics-bg)';
        }

        // Меняем курсор на стандартный (или наследуемый от body)
        floorPlan.style.cursor = 'default';
        
        if (planTitle) planTitle.textContent = `План: ${appState.currentFloor}`;
        
        const floorText = document.getElementById('floorText');
        if (floorText) floorText.textContent = appState.currentFloor;
        
        const roomText = document.getElementById('roomText');
        if (roomText) roomText.textContent = '-';
        
        appState.currentRoom = null;
        appState.viewMode = 'floor';
        appState.selectedAssetId = null;
        appState.panOffset = { x: 0, y: 0 };
        
        const backButton = document.getElementById('backButton');
        if (backButton) backButton.style.display = 'none';
        
        if (ROOM_MAP[appState.currentFloor]) {
            drawRooms();
        } else {
            const message = document.createElement('div');
            message.style.position = 'absolute';
            message.style.top = '50%';
            message.style.left = '50%';
            message.style.transform = 'translate(-50%, -50%)';
            message.style.color = 'var(--text-secondary)';
            message.style.fontSize = '18px';
            message.style.textAlign = 'center';
            message.style.padding = '20px';
            message.style.backgroundColor = 'rgba(0,0,0,0.5)';
            message.style.borderRadius = '10px';
            message.innerHTML = `
                <i class="fas fa-info-circle" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>
                <div>Для этого этажа нет данных о комнатах</div>
                <div style="font-size: 14px; margin-top: 10px;">Выберите другой этаж</div>
            `;
            floorPlan.appendChild(message);
        }
        
        updateAssetTree();
        clearAssetDetails();
        clearRoomStats();
        updateButtonStates();
        
        console.log(`Загружен план: ${appState.currentFloor}`);
    } catch (error) {
        console.error('Ошибка загрузки плана:', error);
        showToast('Ошибка загрузки плана', 'error');
    }
}

            
            function drawRooms() {
                const floorPlan = document.getElementById('floorPlan');
                if (!floorPlan) return;
                
                const rooms = ROOM_MAP[appState.currentFloor];
                
                document.querySelectorAll('.room').forEach(room => room.remove());
                
                let roomCount = 0;
                for (const [roomId, coords] of Object.entries(rooms)) {
                    const [x1, y1, x2, y2] = coords;
                    const width = x2 - x1;
                    const height = y2 - y1;
                    
                    if (width > 5 && height > 5 && width < 5000 && height < 5000) {
                        const room = createRoomElement(roomId, x1, y1, width, height);
                        floorPlan.appendChild(room);
                        roomCount++;
                    }
                }
                
                console.log(`Отрисовано ${roomCount} комнат`);
            }
            function createRoomElement(roomId, x, y, width, height) {
    const room = document.createElement('div');
    room.className = 'room';
    room.dataset.roomId = roomId;
    room.style.left = `${x}px`;
    room.style.top = `${y}px`;
    room.style.width = `${width}px`;
    room.style.height = `${height}px`;

    // Определяем стиль рамки и фона
    if (roomId === 'Первый этаж' || roomId === 'Второй этаж') {
        // Это ссылка на другой этаж – выделяем оранжевым
        room.style.border = '2px dashed #FF9800';
        room.style.background = 'rgba(255, 152, 0, 0.15)';
        room.style.cursor = 'pointer';
    } else {
        // Обычная комната
        if (width < 50 || height < 50) {
            room.style.border = '1px solid var(--room-border)';
            room.style.background = 'rgba(33, 150, 243, 0.2)';
        } else {
            room.style.border = '2px dashed var(--room-border)';
            room.style.background = 'rgba(33, 150, 243, 0.1)';
        }
    }
    
    const label = document.createElement('div');
    label.className = 'room-label';
    label.textContent = roomId;
    
    // Шрифт в зависимости от размера
    if (width < 50 || height < 50) {
        label.style.fontSize = '8px';
        label.style.padding = '1px 3px';
    } else if (width < 100 || height < 100) {
        label.style.fontSize = '9px';
        label.style.padding = '2px 4px';
    } else {
        label.style.fontSize = '10px';
        label.style.padding = '3px 6px';
    }

    // Для этажей добавляем иконку перехода
    if (roomId === 'Первый этаж' || roomId === 'Второй этаж') {
        const icon = document.createElement('i');
        icon.className = 'fas fa-level-up-alt';
        icon.style.marginLeft = '4px';
        label.appendChild(icon);
    }
    
    room.appendChild(label);
    room.title = roomId === 'Первый этаж' || roomId === 'Второй этаж'
        ? `Перейти на ${roomId}`
        : `Двойной клик для входа в ${roomId}`;
    
    return room;
}
            
            async function checkImageExists(imageFile) {
                try {
                    const response = await fetch(imageFile, { method: 'HEAD' });
                    return response.ok;
                } catch (error) {
                    console.warn(`Ошибка проверки файла ${imageFile}:`, error);
                    return false;
                }
            }
            
            async function loadRoomView(roomId) {
                try {
                    const floorPlan = document.getElementById('floorPlan');
                    if (!floorPlan) return;
                    
                    const planTitle = document.getElementById('planTitle');
                    
                    floorPlan.innerHTML = '';
                    
                    showLoading();
                    
                    const bgFile = "Kabinet.png";
                    
                    const imageExists = await checkImageExists(bgFile);
                    
                    if (imageExists) {
                        const img = new Image();
                        img.onload = function() {
                            floorPlan.style.backgroundImage = `url('${bgFile}')`;
                            floorPlan.style.backgroundSize = 'cover';
                            floorPlan.style.backgroundRepeat = 'no-repeat';
                            floorPlan.style.backgroundPosition = 'center';
                            floorPlan.style.backgroundColor = 'transparent';
                            hideLoading();
                            console.log(`Фон ${bgFile} успешно загружен`);
                        };
                        img.onerror = function() {
                            console.error(`Ошибка загрузки ${bgFile}`);
                            floorPlan.style.backgroundImage = 'none';
                            floorPlan.style.backgroundColor = '#f0f0f0';
                            hideLoading();
                            showToast('Не удалось загрузить фон комнаты', 'warning');
                        };
                        img.src = bgFile;
                    } else {
                        console.warn(`Файл ${bgFile} не найден, используется цветовой фон`);
                        floorPlan.style.backgroundImage = 'none';
                        floorPlan.style.backgroundColor = '#f0f0f0';
                        hideLoading();
                    }
                    
                    floorPlan.style.cursor = 'default';
                    
                    if (planTitle) planTitle.textContent = `Комната: ${roomId}`;
                    
                    const roomText = document.getElementById('roomText');
                    if (roomText) roomText.textContent = roomId;
                    
                    appState.currentRoom = roomId;
                    appState.viewMode = 'room';
                    appState.selectedAssetId = null;
                    appState.panOffset = { x: 0, y: 0 };
                    
                    const backButton = document.getElementById('backButton');
                    if (backButton) backButton.style.display = 'inline-flex';
                    
                    drawRoomAssets(roomId);
                    updateAssetTree();
                    updateRoomStats(roomId);
                    
                    console.log(`Загружена комната: ${roomId}`);
                } catch (error) {
                    console.error('Ошибка загрузки комнаты:', error);
                    hideLoading();
                    showToast('Ошибка загрузки комнаты', 'error');
                    
                    const floorPlan = document.getElementById('floorPlan');
                    if (floorPlan) {
                        floorPlan.style.backgroundImage = 'none';
                        floorPlan.style.backgroundColor = '#f0f0f0';
                    }
                }
            }
            
            // ИСПРАВЛЕНО: Улучшенное создание элементов активов
function createAssetElement(asset) {
    const assetDiv = document.createElement('div');
    assetDiv.className = 'asset';
    assetDiv.id = `asset-${asset.id}`;
    assetDiv.dataset.assetId = asset.id;
    
    // ИСПРАВЛЕНО: Гарантированное получение координат
    let x = asset.x;
    let y = asset.y;
    
    if (x === undefined || x === null || isNaN(x)) {
        x = 100;
        asset.x = 100; // Исправляем в объекте
    }
    if (y === undefined || y === null || isNaN(y)) {
        y = 100;
        asset.y = 100; // Исправляем в объекте
    }
    
    const width = asset.width || ASSET_SIZES[asset.type] || DEFAULT_ICON_SIZE;
    const height = asset.height || ASSET_SIZES[asset.type] || DEFAULT_ICON_SIZE;
    
    // ИСПРАВЛЕНО: Устанавливаем data-атрибуты для резервного хранения
    assetDiv.setAttribute('data-x', x);
    assetDiv.setAttribute('data-y', y);
    
    assetDiv.style.left = `${x}px`;
    assetDiv.style.top = `${y}px`;
    assetDiv.style.width = `${width}px`;
    assetDiv.style.height = `${height}px`;
    
    const color = asset.custom_color || DEFAULT_COLORS[asset.type] || '#2196F3';
    assetDiv.style.backgroundColor = 'transparent';
    assetDiv.style.border = `2px solid ${asset.parent_id ? '#9C27B0' : (asset.category === 'furniture' ? '#4CAF50' : '#FF9800')}`;
    assetDiv.style.zIndex = asset.parent_id ? 15 : 10;
    
    assetDiv.addEventListener('mouseenter', function() {
        appState.hoveredAssetId = asset.id;
        this.style.zIndex = '100';
    });
    
    assetDiv.addEventListener('mouseleave', function() {
        appState.hoveredAssetId = null;
        if (appState.selectedAssetId === asset.id) {
            this.style.zIndex = '50';
        } else {
            this.style.zIndex = asset.parent_id ? '15' : '10';
        }
    });
    
    const iconDiv = document.createElement('div');
    iconDiv.className = 'asset-icon';
    iconDiv.style.backgroundColor = 'transparent';
    
    let iconFile = USER_DEVICES_ICONS[asset.type] || NETWORK_ICONS[asset.type];
    if (iconFile) {
        const img = document.createElement('img');
        img.src = iconFile;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        img.onerror = function() {
            this.style.display = 'none';
            const fallbackIcon = document.createElement('i');
            fallbackIcon.className = FONT_AWESOME_ICONS[asset.type] || 'fas fa-cube';
            fallbackIcon.style.color = color;
            fallbackIcon.style.fontSize = `${Math.min(width, height) * 0.6}px`;
            iconDiv.appendChild(fallbackIcon);
        };
        iconDiv.appendChild(img);
    } else {
        const icon = document.createElement('i');
        icon.className = FONT_AWESOME_ICONS[asset.type] || 'fas fa-cube';
        icon.style.color = color;
        icon.style.fontSize = `${Math.min(width, height) * 0.6}px`;
        iconDiv.appendChild(icon);
    }
    
    assetDiv.appendChild(iconDiv);
    
    const labelDiv = document.createElement('div');
    labelDiv.className = 'asset-label';
    labelDiv.textContent = asset.inventory_number || asset.type;
    assetDiv.appendChild(labelDiv);
    
    if (appState.selectedAssetId === asset.id && appState.resizeMode) {
        createResizeHandles(assetDiv);
    }
    
    return assetDiv;
}

            function createResizeHandles(assetElement) {
                const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
                
                positions.forEach(position => {
                    const handle = document.createElement('div');
                    handle.className = `resize-handle ${position}`;
                    handle.dataset.position = position;
                    assetElement.appendChild(handle);
                });
            }
            
            function updateAssetTree() {
                const treeContainer = document.getElementById('assetTree');
                if (!treeContainer) return;
                
                treeContainer.innerHTML = '';
                
                if (appState.viewMode === 'room' && appState.currentRoom) {
                    const categories = {
                        furniture: [],
                        device_fixed: [],
                        device_movable: [],
                        network_equipment: [],
                        network_cables: [],
                        network_infrastructure: []
                    };
                    
                    Object.values(appState.assets).forEach(asset => {
                        if (asset.room_id === appState.currentRoom && categories[asset.category]) {
                            categories[asset.category].push(asset);
                        }
                    });
                    
                    for (const [categoryKey, assets] of Object.entries(categories)) {
                        if (assets.length > 0) {
                            const categoryName = ASSET_CATEGORIES[categoryKey] || categoryKey;
                            
                            const categoryNode = document.createElement('div');
                            categoryNode.className = 'tree-node';
                            
                            const header = document.createElement('div');
                            header.className = 'tree-header';
                            header.innerHTML = `<i class="fas fa-folder"></i> ${categoryName} (${assets.length})`;
                            categoryNode.appendChild(header);
                            
                            const content = document.createElement('div');
                            content.className = 'tree-content';
                            
                            assets.sort((a, b) => a.type.localeCompare(b.type));
                            
                            assets.forEach(asset => {
                                const item = document.createElement('div');
                                item.className = 'tree-item';
                                if (appState.selectedAssetId === asset.id) {
                                    item.classList.add('selected');
                                }
                                item.dataset.assetId = asset.id;
                                
                                let iconClass = 'fas fa-cube';
                                if (asset.category === 'furniture') {
                                    iconClass = 'fas fa-couch';
                                } else if (asset.category === 'device_fixed') {
                                    iconClass = 'fas fa-server';
                                } else if (asset.category === 'device_movable') {
                                    iconClass = 'fas fa-laptop';
                                } else if (asset.category === 'network_equipment') {
                                    iconClass = 'fas fa-wifi';
                                } else if (asset.category === 'network_cables') {
                                    iconClass = 'fas fa-ethernet';
                                } else if (asset.category === 'network_infrastructure') {
                                    iconClass = 'fas fa-network-wired';
                                }
                                
                                item.innerHTML = `
                                    <div class="tree-item-icon"><i class="${iconClass}"></i></div>
                                    <div style="flex: 1; overflow: hidden; text-overflow: ellipsis;">${asset.type}</div>
                                    <div style="font-size: 11px; color: var(--text-secondary);">${asset.inventory_number || ''}</div>
                                `;
                                
                                content.appendChild(item);
                            });
                            
                            categoryNode.appendChild(content);
                            treeContainer.appendChild(categoryNode);
                        }
                    }
                    
                    if (treeContainer.children.length === 0) {
                        treeContainer.innerHTML = '<div class="text-muted text-center">В комнате нет активов</div>';
                    }
                } else {
                    treeContainer.innerHTML = '<div class="text-muted text-center">Выберите комнату для просмотра активов</div>';
                }
                
                const assetCount = document.getElementById('assetCount');
                if (assetCount) assetCount.textContent = Object.keys(appState.assets).length;
            }
            
            function filterAssets() {
                const searchText = document.getElementById('searchInput').value.toLowerCase();
                const filterType = document.getElementById('filterSelect').value;
                const treeItems = document.querySelectorAll('.tree-item');
                
                treeItems.forEach(item => {
                    const assetId = item.dataset.assetId;
                    const asset = appState.assets[assetId];
                    if (!asset) return;
                    
                    let matchesSearch = true;
                    let matchesFilter = true;
                    
                    if (searchText) {
                        matchesSearch = asset.type.toLowerCase().includes(searchText) ||
                                       (asset.inventory_number && asset.inventory_number.toLowerCase().includes(searchText)) ||
                                       (asset.model && asset.model.toLowerCase().includes(searchText));
                    }
                    
                    if (filterType === 'furniture') {
                        matchesFilter = asset.category === 'furniture';
                    } else if (filterType === 'devices') {
                        matchesFilter = asset.category === 'device_fixed' || asset.category === 'device_movable';
                    } else if (filterType === 'network') {
                        matchesFilter = asset.category === 'network_equipment' || asset.category === 'network_cables' || asset.category === 'network_infrastructure';
                    } else if (filterType === 'attached') {
                        matchesFilter = !!asset.parent_id;
                    } else if (filterType === 'all') {
                        matchesFilter = true;
                    }
                    
                    item.style.display = matchesSearch && matchesFilter ? 'flex' : 'none';
                });
                
                document.querySelectorAll('.tree-node').forEach(node => {
                    const visibleItems = node.querySelectorAll('.tree-item[style*="flex"]');
                    node.style.display = visibleItems.length > 0 ? 'block' : 'none';
                });
            }
            
            function updateAssetDetails(assetId) {
                const asset = appState.assets[assetId];
                const assetDetails = document.getElementById('assetDetails');
                
                if (!asset || !assetDetails) {
                    clearAssetDetails();
                    return;
                }
                
                const status = ASSET_STATUSES[asset.status] || ASSET_STATUSES.active;
                const category = ASSET_CATEGORIES[asset.category] || asset.category;
                const color = asset.custom_color || DEFAULT_COLORS[asset.type] || '#2196F3';
                
                let parentInfo = '';
                if (asset.parent_id && appState.assets[asset.parent_id]) {
                    const parent = appState.assets[asset.parent_id];
                    parentInfo = `
                        <tr>
                            <td>Находится на:</td>
                            <td>${parent.type} (${parent.inventory_number || 'Без номера'})</td>
                        </tr>
                    `;
                }
                
                let attachedInfo = '';
                if (asset.category === 'furniture') {
                    const attachedCount = Object.values(appState.assets).filter(a => a.parent_id === assetId).length;
                    if (attachedCount > 0) {
                        attachedInfo = `
                            <tr>
                                <td>Прикрепленные устройства:</td>
                                <td>${attachedCount} шт.</td>
                            </tr>
                        `;
                    }
                }
                
                const purchaseDate = asset.purchase_date ? new Date(asset.purchase_date).toLocaleDateString('ru-RU') : 'Не указана';
                const warrantyDate = asset.warranty_until ? new Date(asset.warranty_until).toLocaleDateString('ru-RU') : 'Не указана';
                
                const html = `
                    <div class="details-edit-form">
                        <div class="details-edit-field">
                            <h4><i class="fas fa-tag"></i> Основная информация</h4>
                            <div class="details-edit-row">
                                <label>Тип:</label>
                                <select id="editType" class="form-control">
                                    ${getAllAssetTypesOptions(asset.type)}
                                </select>
                            </div>
                            <div class="details-edit-row">
                                <label>Категория:</label>
                                <input type="text" value="${category}" class="form-control" disabled>
                            </div>
                            <div class="details-edit-row">
                                <label>Инв. номер:</label>
                                <input type="text" id="editInvNumber" value="${asset.inventory_number || ''}" class="form-control">
                            </div>
                            <div class="details-edit-row">
                                <label>Модель:</label>
                                <input type="text" id="editModel" value="${asset.model || ''}" class="form-control">
                            </div>
                            <div class="details-edit-row">
                                <label>Серийный номер:</label>
                                <input type="text" id="editSerial" value="${asset.serial_number || ''}" class="form-control">
                            </div>
                        </div>
                        
                        <div class="details-edit-field">
                            <h4><i class="fas fa-info-circle"></i> Статус и расположение</h4>
                            <div class="details-edit-row">
                                <label>Статус:</label>
                                <select id="editStatus" class="form-control">
                                    ${Object.entries(ASSET_STATUSES).map(([key, s]) => 
                                        `<option value="${key}" ${asset.status === key ? 'selected' : ''}>${s.name}</option>`
                                    ).join('')}
                                </select>
                            </div>
                            <div class="details-edit-row">
                                <label>Комната:</label>
                                <input type="text" id="editRoom" value="${asset.room_id || ''}" class="form-control">
                            </div>
                            <div class="details-edit-row">
                                <label>Позиция X:</label>
                                <input type="number" id="editX" value="${asset.x || 100}" class="form-control" step="1">
                            </div>
                            <div class="details-edit-row">
                                <label>Позиция Y:</label>
                                <input type="number" id="editY" value="${asset.y || 100}" class="form-control" step="1">
                            </div>
                        </div>
                        
                        <div class="details-edit-field">
                            <h4><i class="fas fa-paint-brush"></i> Внешний вид</h4>
                            <div class="details-edit-row">
                                <label>Цвет:</label>
                                <div style="display: flex; gap: 5px; align-items: center;">
                                    <div id="editColorSample" style="width: 30px; height: 30px; background-color: ${color}; border-radius: 4px; border: 1px solid var(--border);"></div>
                                    <input type="color" id="editColor" value="${color}" style="width: 50px; height: 30px;">
                                </div>
                            </div>
                            <div class="details-edit-row">
                                <label>Ширина:</label>
                                <input type="number" id="editWidth" value="${asset.width || ASSET_SIZES[asset.type] || DEFAULT_ICON_SIZE}" class="form-control" min="24" max="256" step="1">
                            </div>
                            <div class="details-edit-row">
                                <label>Высота:</label>
                                <input type="number" id="editHeight" value="${asset.height || ASSET_SIZES[asset.type] || DEFAULT_ICON_SIZE}" class="form-control" min="24" max="256" step="1">
                            </div>
                        </div>
                        
                        <div class="details-edit-field">
                            <h4><i class="fas fa-coins"></i> Финансовая информация</h4>
                            <div class="details-edit-row">
                                <label>Сумма:</label>
                                <input type="number" id="editSum" value="${asset.sum || 0}" class="form-control" min="0" step="1000">
                            </div>
                            <div class="details-edit-row">
                                <label>Ответственный:</label>
                                <input type="text" id="editResponsible" value="${asset.responsible || ''}" class="form-control">
                            </div>
                            <div class="details-edit-row">
                                <label>Дата приобретения:</label>
                                <input type="date" id="editPurchaseDate" value="${asset.purchase_date || ''}" class="form-control">
                            </div>
                            <div class="details-edit-row">
                                <label>Гарантия до:</label>
                                <input type="date" id="editWarranty" value="${asset.warranty_until || ''}" class="form-control">
                            </div>
                        </div>
                        
                        <div class="details-edit-field">
                            <h4><i class="fas fa-sticky-note"></i> Примечания</h4>
                            <textarea id="editNotes" rows="3" class="form-control">${asset.notes || ''}</textarea>
                        </div>
                        
                        ${parentInfo ? `
                        <div class="details-edit-field">
                            <h4><i class="fas fa-link"></i> Прикрепления</h4>
                            <table class="details-table">
                                ${parentInfo}
                                ${attachedInfo}
                            </table>
                        </div>
                        ` : attachedInfo ? `
                        <div class="details-edit-field">
                            <h4><i class="fas fa-link"></i> Прикрепления</h4>
                            <table class="details-table">
                                ${attachedInfo}
                            </table>
                        </div>
                        ` : ''}
                        
                        <button class="button details-save-btn" id="saveDetailsBtn" data-hotkey="Ctrl+Enter">
                            <i class="fas fa-save"></i> Сохранить изменения
                        </button>
                        <button class="button details-cancel-btn" id="cancelDetailsBtn" data-hotkey="Esc">
                            <i class="fas fa-times"></i> Отменить
                        </button>
                    </div>
                `;
                
                assetDetails.innerHTML = html;
                
                document.getElementById('saveDetailsBtn').addEventListener('click', function() {
                    saveAssetDetails(assetId);
                });
                
                document.getElementById('cancelDetailsBtn').addEventListener('click', function() {
                    updateAssetDetails(assetId);
                });
                
                const colorInput = document.getElementById('editColor');
                const colorSample = document.getElementById('editColorSample');
                if (colorInput && colorSample) {
                    colorInput.addEventListener('input', function() {
                        colorSample.style.backgroundColor = this.value;
                    });
                }
                
                updateHistoryList();
            }
            
            function getAllAssetTypesOptions(selectedType) {
                const furnitureTypes = ["Стол", "Стул", "Шкаф", "Кресло", "Рабочая станция"];
                const fixedTypes = [
                    "Принтер Canon", "IP-телефон Grandstream", "Серверная стойка", "Копировальный аппарат",
                    "Локальный сервер", "Платёжный терминал", "Промышленный ПК", "Информационный киоск", 
                    "Диспетчерская консоль"
                ];
                const movableTypes = [
                    "Ноутбук HP", "Персональный компьютер", "Монитор", "Клавиатура", "Мышь", "Сканер", "МФУ", 
                    "Проектор", "Админ-панель", "Табло аэропорта", "Тонкий клиент", "Мини-ПК", 
                    "Промышленный планшет"
                ];
                
                const allTypes = [...furnitureTypes, ...fixedTypes, ...movableTypes];
                
                return allTypes.map(type => 
                    `<option value="${type}" ${type === selectedType ? 'selected' : ''}>${type}</option>`
                ).join('');
            }
            
            function saveAssetDetails(assetId) {
                const asset = appState.assets[assetId];
                if (!asset) return;
                
                const updates = {
                    type: document.getElementById('editType').value,
                    inventory_number: document.getElementById('editInvNumber').value,
                    model: document.getElementById('editModel').value,
                    serial_number: document.getElementById('editSerial').value,
                    status: document.getElementById('editStatus').value,
                    room_id: document.getElementById('editRoom').value,
                    x: parseInt(document.getElementById('editX').value) || 100,
                    y: parseInt(document.getElementById('editY').value) || 100,
                    custom_color: document.getElementById('editColor').value,
                    width: parseInt(document.getElementById('editWidth').value) || DEFAULT_ICON_SIZE,
                    height: parseInt(document.getElementById('editHeight').value) || DEFAULT_ICON_SIZE,
                    sum: parseFloat(document.getElementById('editSum').value) || 0,
                    responsible: document.getElementById('editResponsible').value,
                    purchase_date: document.getElementById('editPurchaseDate').value || null,
                    warranty_until: document.getElementById('editWarranty').value || null,
                    notes: document.getElementById('editNotes').value
                };
                
                if (['Стол', 'Стул', 'Шкаф', 'Кресло', 'Рабочая станция'].includes(updates.type)) {
                    updates.category = 'furniture';
                } else if (['Принтер Canon', 'IP-телефон Grandstream', 'Серверная стойка', 'Копировальный аппарат',
                           'Локальный сервер', 'Платёжный терминал', 'Промышленный ПК', 'Информационный киоск', 
                           'Диспетчерская консоль'].includes(updates.type)) {
                    updates.category = 'device_fixed';
                } else {
                    updates.category = 'device_movable';
                }
                
                const validation = validateAssetData({
                    ...asset,
                    ...updates
                });
                
                if (!validation.isValid) {
                    showToast('Проверьте правильность заполнения полей', 'error');
                    return;
                }
                
                updateAsset(assetId, updates);
                showToast('Изменения сохранены', 'success');
            }
            
            function clearAssetDetails() {
                const assetDetails = document.getElementById('assetDetails');
                if (assetDetails) {
                    assetDetails.innerHTML = 
                        '<p class="text-muted text-center">Выберите актив для просмотра и редактирования деталей</p>';
                }
            }
            
            function updateRoomStats(roomId) {
                const assets = Object.values(appState.assets).filter(asset => asset.room_id === roomId);
                const total = assets.length;
                
                const furnitureCount = assets.filter(a => a.category === 'furniture').length;
                const deviceFixedCount = assets.filter(a => a.category === 'device_fixed').length;
                const deviceMovableCount = assets.filter(a => a.category === 'device_movable').length;
                const attachedCount = assets.filter(a => a.parent_id).length;
                
                const totalSum = assets.reduce((sum, asset) => sum + (asset.sum || 0), 0);
                
                const totalArea = assets.reduce((sum, asset) => {
                    return sum + (asset.width || DEFAULT_ICON_SIZE) * (asset.height || DEFAULT_ICON_SIZE) / 1000;
                }, 0);
                
                const statsContent = document.getElementById('statsContent');
                if (!statsContent) return;
                
                statsContent.innerHTML = `
                    <strong>Всего активов:</strong> ${total}<br>
                    <strong>Мебель:</strong> ${furnitureCount}<br>
                    <strong>Устройства (напольные):</strong> ${deviceFixedCount}<br>
                    <strong>Устройства (настольные):</strong> ${deviceMovableCount}<br>
                    <strong>Прикрепленных устройств:</strong> ${attachedCount}<br>
                    <strong>Общая сумма:</strong> ${formatSum(totalSum)}<br>
                    <strong>Общая площадь:</strong> ${totalArea.toFixed(1)} усл.ед.<br>
                `;
            }
            
            function clearRoomStats() {
                const statsContent = document.getElementById('statsContent');
                if (statsContent) {
                    statsContent.innerHTML = 
                        '<p class="text-muted text-center">Выберите комнату для просмотра статистики</p>';
                }
            }
            
            function updateButtonStates() {
                const hasSelection = appState.selectedAssetId !== null;
                const asset = hasSelection ? appState.assets[appState.selectedAssetId] : null;
                
                const editButton = document.getElementById('editButton');
                const deleteButton = document.getElementById('deleteButton');
                const colorButton = document.getElementById('colorButton');
                
                if (editButton) editButton.disabled = !hasSelection;
                if (deleteButton) deleteButton.disabled = !hasSelection;
                if (colorButton) colorButton.disabled = !hasSelection;
                
                const attachButton = document.getElementById('attachButton');
                const detachButton = document.getElementById('detachButton');
                const actionAttach = document.getElementById('actionAttach');
                const actionDetach = document.getElementById('actionDetach');
                
                if (hasSelection && asset && (asset.category === 'device_fixed' || asset.category === 'device_movable')) {
                    if (attachButton) attachButton.disabled = false;
                    if (detachButton) detachButton.disabled = !asset.parent_id;
                    if (actionAttach) actionAttach.disabled = false;
                    if (actionDetach) actionDetach.disabled = !asset.parent_id;
                } else {
                    if (attachButton) attachButton.disabled = true;
                    if (detachButton) detachButton.disabled = true;
                    if (actionAttach) actionAttach.disabled = true;
                    if (actionDetach) actionDetach.disabled = true;
                }
                
                const actionColor = document.getElementById('actionColor');
                const actionStatus = document.getElementById('actionStatus');
                
                if (actionColor) actionColor.disabled = !hasSelection;
                if (actionStatus) actionStatus.disabled = !hasSelection;
                
                const ctxAttach = document.getElementById('ctxAttach');
                const ctxDetach = document.getElementById('ctxDetach');
                
                if (ctxAttach && ctxDetach) {
                    if (hasSelection && asset && (asset.category === 'device_fixed' || asset.category === 'device_movable')) {
                        if (asset.parent_id) {
                            ctxAttach.style.display = 'none';
                            ctxDetach.style.display = 'flex';
                        } else {
                            ctxAttach.style.display = 'flex';
                            ctxDetach.style.display = 'none';
                        }
                    } else {
                        ctxAttach.style.display = 'none';
                        ctxDetach.style.display = 'none';
                    }
                }
                
                const selectedText = document.getElementById('selectedText');
                if (selectedText) {
                    if (hasSelection && asset) {
                        selectedText.textContent = asset.type;
                    } else {
                        selectedText.textContent = '-';
                    }
                }
            }
            
            function selectAsset(assetId) {
                document.querySelectorAll('.asset.selected').forEach(el => {
                    el.classList.remove('selected');
                    const asset = appState.assets[el.dataset.assetId];
                    if (asset) {
                        el.style.zIndex = asset.parent_id ? '15' : '10';
                    }
                    el.querySelectorAll('.resize-handle').forEach(handle => handle.remove());
                });
                
                document.querySelectorAll('.tree-item.selected').forEach(el => {
                    el.classList.remove('selected');
                });
                
                appState.selectedAssetId = assetId;
                
                const assetElement = document.getElementById(`asset-${assetId}`);
                const treeItem = document.querySelector(`.tree-item[data-asset-id="${assetId}"]`);
                
                if (assetElement) {
                    assetElement.classList.add('selected');
                    assetElement.style.zIndex = '50';
                    
                    if (appState.resizeMode) {
                        createResizeHandles(assetElement);
                    }
                    
                    assetElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                }
                
                if (treeItem) {
                    treeItem.classList.add('selected');
                    treeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                
                updateAssetDetails(assetId);
                updateButtonStates();
                switchInfoTab('details');
            }
            
            function deselectAsset() {
                appState.selectedAssetId = null;
                
                document.querySelectorAll('.asset.selected').forEach(el => {
                    el.classList.remove('selected');
                    const asset = appState.assets[el.dataset.assetId];
                    if (asset) {
                        el.style.zIndex = asset.parent_id ? '15' : '10';
                    }
                    el.querySelectorAll('.resize-handle').forEach(handle => handle.remove());
                });
                
                document.querySelectorAll('.tree-item.selected').forEach(el => {
                    el.classList.remove('selected');
                });
                
                clearAssetDetails();
                updateButtonStates();
                
                const selectedText = document.getElementById('selectedText');
                if (selectedText) selectedText.textContent = '-';
            }
            
function addAsset(assetData, skipHistory = false) {
    const assetId = generateUUID();
    
    const validation = validateAssetData(assetData);
    if (!validation.isValid) {
        showValidationErrors(validation.errors, 'asset');
        return null;
    }
    
    let category = 'device_movable';
    const furnitureTypes = ["Стол", "Стул", "Шкаф", "Кресло", "Рабочая станция"];
    const fixedTypes = [
        "Принтер Canon", "IP-телефон Grandstream", "Серверная стойка", "Копировальный аппарат",
        "Локальный сервер", "Платёжный терминал", "Промышленный ПК", "Информационный киоск", 
        "Диспетчерская консоль"
    ];

    if (furnitureTypes.includes(assetData.type)) {
        category = 'furniture';
    } else if (fixedTypes.includes(assetData.type)) {
        category = 'device_fixed';
    } else {
        category = 'device_movable';
    }

    const defaultColor = DEFAULT_COLORS[assetData.type] || '#2196F3';
    
    // ИСПРАВЛЕНО: Корректное получение координат с учетом всех возможных форматов
    let x = 100;
    let y = 100;
    
    if (assetData.x !== undefined && assetData.x !== null) {
        const parsedX = parseFloat(assetData.x);
        if (!isNaN(parsedX) && isFinite(parsedX)) {
            x = Math.max(0, Math.min(parsedX, 5000)); // Ограничиваем разумными пределами
        } else {
            console.warn('Invalid x coordinate provided:', assetData.x);
        }
    }
    
    if (assetData.y !== undefined && assetData.y !== null) {
        const parsedY = parseFloat(assetData.y);
        if (!isNaN(parsedY) && isFinite(parsedY)) {
            y = Math.max(0, Math.min(parsedY, 5000)); // Ограничиваем разумными пределами
        } else {
            console.warn('Invalid y coordinate provided:', assetData.y);
        }
    }
    
    console.log(`Creating asset at position: (${x}, ${y})`);
    
    const fullData = {
        id: assetId,
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
        status: assetData.status || 'active',
        category: category,
        parent_id: null,
        custom_color: assetData.custom_color || defaultColor,
        show_icon: true,
        width: ASSET_SIZES[assetData.type] || DEFAULT_ICON_SIZE,
        height: ASSET_SIZES[assetData.type] || DEFAULT_ICON_SIZE,
        aspect_ratio: 1.0,
        sum: assetData.sum || 0,
        purchase_date: assetData.purchase_date || null,
        warranty_until: assetData.warranty_until || null,
        notes: assetData.notes || '',
        x: x,
        y: y,
        room_id: assetData.room_id,
        type: assetData.type,
        inventory_number: assetData.inventory_number,
        model: assetData.model,
        serial_number: assetData.serial_number,
        responsible: assetData.responsible
    };
    
    if (assetData.type === "Монитор") {
        fullData.height = fullData.width * 0.5625;
        fullData.aspect_ratio = 1.78;
    }
    
    appState.assets[assetId] = fullData;
    
    // ИСПРАВЛЕНО: Сохраняем позицию в отдельный объект для отслеживания
    appState.assetPositions[assetId] = { x: x, y: y };
    
    if (!skipHistory) {
        pushToUndo('create', {
            assetId: assetId,
            assetData: fullData
        });
    }
    
    if (appState.viewMode === 'room' && appState.currentRoom) {
        const floorPlan = document.getElementById('floorPlan');
        if (floorPlan) {
            const assetElement = createAssetElement(fullData);
            floorPlan.appendChild(assetElement);
            
            // ИСПРАВЛЕНО: Принудительно устанавливаем позицию после добавления в DOM
            assetElement.style.left = `${x}px`;
            assetElement.style.top = `${y}px`;
            
            const hint = floorPlan.querySelector('div[style*="transform: translate(-50%, -50%)"]');
            if (hint) hint.remove();
        }
    }
    
    addToHistory('create', assetId, { type: assetData.type, room: assetData.room_id, position: { x, y } });
    
    updateAssetTree();
    if (appState.currentRoom) {
        updateRoomStats(appState.currentRoom);
    }
    
    selectAsset(assetId);
    
    saveToLocalStorage();
    scheduleAutoSave();
    
    showStatus(`Добавлен: ${assetData.type} (${x}, ${y})`);
    showToast(`Добавлен: ${assetData.type}`, 'success');
    
    return assetId;
}


function updateAsset(assetId, updates, skipHistory = false) {
    const asset = appState.assets[assetId];
    if (!asset) return false;
    
    const oldData = { ...asset };
    
    // ИСПРАВЛЕНО: Валидация координат перед применением
    if (updates.x !== undefined) {
        const parsedX = parseFloat(updates.x);
        if (!isNaN(parsedX) && isFinite(parsedX)) {
            updates.x = Math.max(0, Math.min(parsedX, 5000));
        } else {
            console.warn('Invalid x coordinate in update:', updates.x);
            delete updates.x; // Удаляем невалидное значение
        }
    }
    
    if (updates.y !== undefined) {
        const parsedY = parseFloat(updates.y);
        if (!isNaN(parsedY) && isFinite(parsedY)) {
            updates.y = Math.max(0, Math.min(parsedY, 5000));
        } else {
            console.warn('Invalid y coordinate in update:', updates.y);
            delete updates.y; // Удаляем невалидное значение
        }
    }
    
    // Применяем обновления
    Object.assign(asset, updates);
    asset.updated = new Date().toISOString();
    
    // ИСПРАВЛЕНО: Обновляем отслеживание позиции
    if (updates.x !== undefined || updates.y !== undefined) {
        appState.assetPositions[assetId] = { 
            x: asset.x, 
            y: asset.y 
        };
    }
    
    if (!skipHistory) {
        pushToUndo('update', {
            assetId: assetId,
            oldData: oldData,
            newData: { ...asset }
        });
    }
    
    addToHistory('update', assetId, { updates: Object.keys(updates) });
    
    const assetElement = document.getElementById(`asset-${assetId}`);
    if (assetElement) {
        // ИСПРАВЛЕНО: Гарантированно получаем актуальные координаты
        let x = asset.x;
        let y = asset.y;
        
        if (x === undefined || x === null || isNaN(x)) {
            x = oldData.x || 100;
            asset.x = x; // Восстанавливаем значение
        }
        if (y === undefined || y === null || isNaN(y)) {
            y = oldData.y || 100;
            asset.y = y; // Восстанавливаем значение
        }
        
        const width = asset.width || ASSET_SIZES[asset.type] || DEFAULT_ICON_SIZE;
        const height = asset.height || ASSET_SIZES[asset.type] || DEFAULT_ICON_SIZE;
        
        // ИСПРАВЛЕНО: Устанавливаем позицию с проверкой
        assetElement.style.left = `${x}px`;
        assetElement.style.top = `${y}px`;
        assetElement.style.width = `${width}px`;
        assetElement.style.height = `${height}px`;
        
        const color = asset.custom_color || DEFAULT_COLORS[asset.type] || '#2196F3';
        assetElement.style.backgroundColor = 'transparent';
        assetElement.style.border = `2px solid ${asset.parent_id ? '#9C27B0' : (asset.category === 'furniture' ? '#4CAF50' : '#FF9800')}`;
        
        // Устанавливаем z-index
        if (appState.selectedAssetId === assetId) {
            assetElement.style.zIndex = '50';
        } else if (appState.hoveredAssetId === assetId) {
            assetElement.style.zIndex = '100';
        } else {
            assetElement.style.zIndex = asset.parent_id ? '15' : '10';
        }
        
        // Обновляем иконку
        const iconDiv = assetElement.querySelector('.asset-icon');
        if (iconDiv) {
            iconDiv.innerHTML = '';
            
            const iconFile = USER_DEVICES_ICONS[asset.type] || NETWORK_ICONS[asset.type];
            if (iconFile) {
                const img = document.createElement('img');
                img.src = iconFile;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'contain';
                img.onerror = function() {
                    this.style.display = 'none';
                    const fallbackIcon = document.createElement('i');
                    fallbackIcon.className = FONT_AWESOME_ICONS[asset.type] || 'fas fa-cube';
                    fallbackIcon.style.color = color;
                    fallbackIcon.style.fontSize = `${Math.min(width, height) * 0.6}px`;
                    iconDiv.appendChild(fallbackIcon);
                };
                iconDiv.appendChild(img);
            } else {
                const icon = document.createElement('i');
                icon.className = FONT_AWESOME_ICONS[asset.type] || 'fas fa-cube';
                icon.style.color = color;
                icon.style.fontSize = `${Math.min(width, height) * 0.6}px`;
                iconDiv.appendChild(icon);
            }
        }
        
        // Обновляем метку
        const label = assetElement.querySelector('.asset-label');
        if (label) {
            label.textContent = asset.inventory_number || asset.type;
        }
        
        // Обновляем handles для resize режима
        assetElement.querySelectorAll('.resize-handle').forEach(handle => handle.remove());
        if (appState.selectedAssetId === assetId && appState.resizeMode) {
            createResizeHandles(assetElement);
        }
    }
    
    updateAssetDetails(assetId);
    updateAssetTree();
    if (appState.currentRoom) {
        updateRoomStats(appState.currentRoom);
    }
    
    saveToLocalStorage();
    scheduleAutoSave();
    
    showStatus(`Обновлен: ${asset.type} (${asset.x}, ${asset.y})`);
    
    return true;
}

// ИСПРАВЛЕНО: Функция для безопасного получения позиции элемента
function getElementPosition(element) {
    let x = parseFloat(element.style.left);
    let y = parseFloat(element.style.top);
    
    // Если не удалось получить из style, пробуем computed style
    if (isNaN(x) || isNaN(y)) {
        const computed = window.getComputedStyle(element);
        x = parseFloat(computed.left);
        y = parseFloat(computed.top);
    }
    
    // Если все еще NaN, пытаемся получить из data-атрибутов или возвращаем 0
    if (isNaN(x)) {
        const dataX = element.getAttribute('data-x');
        x = dataX ? parseFloat(dataX) : 0;
    }
    if (isNaN(y)) {
        const dataY = element.getAttribute('data-y');
        y = dataY ? parseFloat(dataY) : 0;
    }
    
    // Последняя проверка
    if (isNaN(x) || !isFinite(x)) x = 100;
    if (isNaN(y) || !isFinite(y)) y = 100;
    
    return { x, y };
}

// ИСПРАВЛЕНО: Функция для безопасного получения размеров элемента
function getElementSize(element) {
    let width = parseFloat(element.style.width);
    let height = parseFloat(element.style.height);
    
    if (isNaN(width) || isNaN(height)) {
        const computed = window.getComputedStyle(element);
        width = parseFloat(computed.width);
        height = parseFloat(computed.height);
    }
    
    if (isNaN(width) || !isFinite(width)) width = DEFAULT_ICON_SIZE;
    if (isNaN(height) || !isFinite(height)) height = DEFAULT_ICON_SIZE;
    
    return { width, height };
}

function deleteAsset(assetId, skipHistory = false) {
                const asset = appState.assets[assetId];
                if (!asset) return false;
                
                if (!skipHistory) {
                    pushToUndo('delete', {
                        assetId: assetId,
                        assetData: { ...asset }
                    });
                }
                
                addToHistory('delete', assetId, { type: asset.type, room: asset.room_id });
                
                if (asset.parent_id) {
                    const parent = appState.assets[asset.parent_id];
                    if (parent && parent.attached_devices) {
                        parent.attached_devices = parent.attached_devices.filter(id => id !== assetId);
                    }
                }
                
                if (asset.category === 'furniture' && asset.attached_devices) {
                    asset.attached_devices.forEach(deviceId => {
                        const device = appState.assets[deviceId];
                        if (device) {
                            device.parent_id = null;
                            const deviceElement = document.getElementById(`asset-${deviceId}`);
                            if (deviceElement) {
                                deviceElement.style.border = `2px solid ${device.category === 'furniture' ? '#4CAF50' : '#FF9800'}`;
                                deviceElement.style.zIndex = device.parent_id ? '15' : '10';
                            }
                        }
                    });
                }
                
                delete appState.assets[assetId];
                
                const assetElement = document.getElementById(`asset-${assetId}`);
                if (assetElement) {
                    assetElement.remove();
                }
                
                if (appState.selectedAssetId === assetId) {
                    deselectAsset();
                }
                
                updateAssetTree();
                if (appState.currentRoom) {
                    updateRoomStats(appState.currentRoom);
                }
                
                saveToLocalStorage();
                scheduleAutoSave();
                
                showStatus(`Удален: ${asset.type}`);
                showToast(`Удален: ${asset.type}`, 'warning');
                
                return true;
            }
            
            function attachDevice(deviceId, furnitureId) {
                const device = appState.assets[deviceId];
                const furniture = appState.assets[furnitureId];
                
                if (!device || !furniture || furniture.category !== 'furniture') {
                    showToast('Не удалось прикрепить устройство', 'error');
                    return false;
                }
                
                const oldParentId = device.parent_id;
                
                if (device.parent_id && appState.assets[device.parent_id]) {
                    const oldParent = appState.assets[device.parent_id];
                    if (oldParent.attached_devices) {
                        oldParent.attached_devices = oldParent.attached_devices.filter(id => id !== deviceId);
                    }
                }
                
                device.parent_id = furnitureId;
                
                if (!furniture.attached_devices) {
                    furniture.attached_devices = [];
                }
                
                if (!furniture.attached_devices.includes(deviceId)) {
                    furniture.attached_devices.push(deviceId);
                }
                
                addToHistory('attach', deviceId, { to: furniture.type, furnitureId: furnitureId });
                
                pushToUndo('update', {
                    assetId: deviceId,
                    oldData: { ...device, parent_id: oldParentId },
                    newData: { ...device }
                });
                
                // ИСПРАВЛЕНО: Правильное позиционирование прикрепленного устройства
                device.x = (furniture.x || 100) + 30;
                device.y = (furniture.y || 100) + 30;
                
                const deviceElement = document.getElementById(`asset-${deviceId}`);
                if (deviceElement) {
                    deviceElement.style.left = `${device.x}px`;
                    deviceElement.style.top = `${device.y}px`;
                    deviceElement.style.border = '2px solid #9C27B0';
                    deviceElement.style.zIndex = '15';
                }
                
                updateAssetDetails(deviceId);
                updateAssetTree();
                updateButtonStates();
                
                saveToLocalStorage();
                scheduleAutoSave();
                
                showStatus(`Устройство прикреплено к ${furniture.type}`);
                showToast(`Устройство прикреплено к ${furniture.type}`, 'success');
                
                return true;
            }
            
            function detachDevice(deviceId) {
                const device = appState.assets[deviceId];
                if (!device || !device.parent_id) {
                    showToast('Устройство не прикреплено', 'warning');
                    return false;
                }
                
                const oldParentId = device.parent_id;
                
                const furnitureId = device.parent_id;
                const furniture = appState.assets[furnitureId];
                
                if (furniture && furniture.attached_devices) {
                    furniture.attached_devices = furniture.attached_devices.filter(id => id !== deviceId);
                }
                
                device.parent_id = null;
                
                addToHistory('detach', deviceId, { from: furniture ? furniture.type : 'неизвестно' });
                
                pushToUndo('update', {
                    assetId: deviceId,
                    oldData: { ...device, parent_id: oldParentId },
                    newData: { ...device }
                });
                
                const deviceElement = document.getElementById(`asset-${deviceId}`);
                if (deviceElement) {
                    const color = DEFAULT_COLORS[device.type] || '#2196F3';
                    deviceElement.style.border = `2px solid ${device.category === 'furniture' ? '#4CAF50' : '#FF9800'}`;
                    deviceElement.style.zIndex = '10';
                }
                
                updateAssetDetails(deviceId);
                updateAssetTree();
                updateButtonStates();
                
                saveToLocalStorage();
                scheduleAutoSave();
                
                showStatus(`Устройство откреплено`);
                showToast(`Устройство откреплено`, 'success');
                
                return true;
            }
            
            function switchInfoTab(tabName) {
                document.querySelectorAll('.info-tab').forEach(tab => {
                    tab.classList.remove('active');
                });
                
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                const selectedTab = document.querySelector(`.info-tab[data-tab="${tabName}"]`);
                const selectedContent = document.getElementById(`${tabName}Content`);
                
                if (selectedTab) selectedTab.classList.add('active');
                if (selectedContent) selectedContent.classList.add('active');
            }
            
            function toggleResizeMode() {
                appState.resizeMode = !appState.resizeMode;
                
                const toggle = document.getElementById('resizeModeToggle');
                const label = document.getElementById('resizeModeLabel');
                const statusText = document.getElementById('resizeStatusText');
                
                if (toggle) toggle.checked = appState.resizeMode;
                
                if (appState.resizeMode) {
                    if (label) label.textContent = 'Режим изменения размера: ВКЛ';
                    if (statusText) statusText.textContent = 'Режим изменения размера: ВКЛ (Ctrl+Shift+R)';
                    showStatus('Режим изменения размера включен', 3000);
                    
                    if (appState.selectedAssetId) {
                        const assetElement = document.getElementById(`asset-${appState.selectedAssetId}`);
                        if (assetElement) {
                            createResizeHandles(assetElement);
                        }
                    }
                } else {
                    if (label) label.textContent = 'Режим изменения размера: ВЫКЛ';
                    if (statusText) statusText.textContent = '';
                    showStatus('Режим изменения размера выключен', 3000);
                    
                    document.querySelectorAll('.resize-handle').forEach(handle => handle.remove());
                }
            }
            
            function showStatus(message, duration = 3000) {
                const statusText = document.getElementById('statusText');
                if (statusText) {
                    statusText.textContent = message;
                }
                
                if (duration > 0) {
                    setTimeout(() => {
                        const statusText = document.getElementById('statusText');
                        if (statusText) {
                            statusText.textContent = 'Готово';
                        }
                    }, duration);
                }
            }
            
            function showModal(modalId) {
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
            
            function hideModal(modalId) {
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
            
            function updateUI() {
                const assetCount = document.getElementById('assetCount');
                if (assetCount) assetCount.textContent = Object.keys(appState.assets).length;
                
                const floorText = document.getElementById('floorText');
                if (floorText) floorText.textContent = appState.currentFloor;
                
                const roomText = document.getElementById('roomText');
                if (roomText) roomText.textContent = appState.currentRoom || '-';
                
                updateUndoRedoButtons();
            }
            
            function formatSum(amount) {
                return new Intl.NumberFormat('ru-RU', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }).format(amount) + ' сум';
            }
            
            function setupEventListeners() {
    const floorSelect = document.getElementById('floorSelect');
    if (floorSelect) {
        floorSelect.addEventListener('change', function() {
            appState.currentFloor = this.value;
            loadFloorPlan();
            showStatus(`Переключен на этаж: ${appState.currentFloor}`);
        });
    }

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.items-list').forEach(list => list.style.display = 'none');

            this.classList.add('active');
            const itemsList = document.getElementById(`${this.dataset.tab}Items`);
            if (itemsList) itemsList.style.display = 'flex';
        });
    });

    document.addEventListener('click', function(e) {
        const item = e.target.closest('.item');
        if (item && appState.currentRoom) {
            appState.pendingAssetType = item.dataset.type;
            showStatus(`Выбран: ${item.dataset.type}. Кликните на плане для размещения или нажмите F2 для быстрого добавления`);
        } else if (item && !appState.currentRoom) {
            showStatus('Сначала выберите комнату', 3000);
            showToast('Сначала выберите комнату', 'warning');
        }
    });

    document.querySelectorAll('.info-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchInfoTab(this.dataset.tab);
        });
    });

    const assetTree = document.getElementById('assetTree');
    if (assetTree) {
        assetTree.addEventListener('click', function(e) {
            const treeItem = e.target.closest('.tree-item');
            if (treeItem) {
                const assetId = treeItem.dataset.assetId;
                selectAsset(assetId);
            }
        });
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(filterAssets, 300);
        });
    }

    const filterSelect = document.getElementById('filterSelect');
    if (filterSelect) {
        filterSelect.addEventListener('change', filterAssets);
    }

    const editButton = document.getElementById('editButton');
    if (editButton) {
        editButton.addEventListener('click', () => {
            if (appState.selectedAssetId) {
                showEditAssetModal();
            }
        });
    }

    const deleteButton = document.getElementById('deleteButton');
    if (deleteButton) {
        deleteButton.addEventListener('click', () => {
            if (appState.selectedAssetId && confirm('Удалить выбранный актив?')) {
                deleteAsset(appState.selectedAssetId);
            }
        });
    }

    const attachButton = document.getElementById('attachButton');
    if (attachButton) {
        attachButton.addEventListener('click', showAttachModal);
    }

    const detachButton = document.getElementById('detachButton');
    if (detachButton) {
        detachButton.addEventListener('click', () => {
            if (appState.selectedAssetId) {
                detachDevice(appState.selectedAssetId);
            }
        });
    }

    const colorButton = document.getElementById('colorButton');
    if (colorButton) {
        colorButton.addEventListener('click', showColorModal);
    }

    const resizeModeToggle = document.getElementById('resizeModeToggle');
    if (resizeModeToggle) {
        resizeModeToggle.addEventListener('change', toggleResizeMode);
    }

    const saveButton = document.getElementById('saveButton');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            saveToLocalStorage();
        });
    }

    const statsButton = document.getElementById('statsButton');
    if (statsButton) {
        statsButton.addEventListener('click', showStatsModal);
    }

    const undoButton = document.getElementById('undoButton');
    if (undoButton) {
        undoButton.addEventListener('click', undoLastAction);
    }

    const redoButton = document.getElementById('redoButton');
    if (redoButton) {
        redoButton.addEventListener('click', redoLastAction);
    }

    const actionAttach = document.getElementById('actionAttach');
    if (actionAttach) {
        actionAttach.addEventListener('click', showAttachModal);
    }

    const actionDetach = document.getElementById('actionDetach');
    if (actionDetach) {
        actionDetach.addEventListener('click', () => {
            if (appState.selectedAssetId) {
                detachDevice(appState.selectedAssetId);
            }
        });
    }

    const actionColor = document.getElementById('actionColor');
    if (actionColor) {
        actionColor.addEventListener('click', showColorModal);
    }

    const actionResize = document.getElementById('actionResize');
    if (actionResize) {
        actionResize.addEventListener('click', toggleResizeMode);
    }

    const actionStatus = document.getElementById('actionStatus');
    if (actionStatus) {
        actionStatus.addEventListener('click', showStatusModal);
    }

    const exportJSON = document.getElementById('exportJSON');
    if (exportJSON) {
        exportJSON.addEventListener('click', exportToJSON);
    }

    const exportCSV = document.getElementById('exportCSV');
    if (exportCSV) {
        exportCSV.addEventListener('click', exportToCSV);
    }

    const importData = document.getElementById('importData');
    if (importData) {
        importData.addEventListener('click', () => {
            showModal('importModal');
        });
    }

    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', () => {
            loadFloorPlan();
        });
    }

    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                hideModal(modal.id);
            }
        });
    });

    const saveAsset = document.getElementById('saveAsset');
    if (saveAsset) {
        saveAsset.addEventListener('click', function() {
            const type = document.getElementById('assetType').value;
            const invNumber = document.getElementById('assetInvNumber').value.trim();
            const model = document.getElementById('assetModel').value.trim();
            const responsible = document.getElementById('assetResponsible').value.trim();
            const sum = parseFloat(document.getElementById('assetSum').value) || 0;

            const assetData = {
                type: type,
                inventory_number: invNumber,
                model: model,
                serial_number: document.getElementById('assetSerial').value.trim(),
                sum: sum,
                status: document.getElementById('assetStatus').value,
                responsible: responsible,
                purchase_date: document.getElementById('assetPurchaseDate').value || null,
                warranty_until: document.getElementById('assetWarranty').value || null,
                notes: document.getElementById('assetNotes').value.trim(),
                room_id: appState.currentRoom,
                x: 100,
                y: 100
            };

            const assetId = addAsset(assetData);
            if (assetId) {
                hideModal('addAssetModal');

                document.getElementById('assetInvNumber').value = '';
                document.getElementById('assetModel').value = '';
                document.getElementById('assetSerial').value = '';
                document.getElementById('assetSum').value = '0';
                document.getElementById('assetResponsible').value = '';
                document.getElementById('assetPurchaseDate').value = '';
                document.getElementById('assetWarranty').value = '';
                document.getElementById('assetNotes').value = '';

                document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
                document.querySelectorAll('.form-control').forEach(el => el.classList.remove('validation-error'));
            }
        });
    }

    const cancelAdd = document.getElementById('cancelAdd');
    if (cancelAdd) {
        cancelAdd.addEventListener('click', () => {
            hideModal('addAssetModal');
        });
    }

    const saveQuick = document.getElementById('saveQuick');
    if (saveQuick) {
        saveQuick.addEventListener('click', function() {
            const type = document.getElementById('quickType').value;
            if (!type) {
                alert('Выберите тип объекта');
                return;
            }

            const posText = document.getElementById('quickPosition').textContent;
            const match = posText.match(/X:\s*(\d+),\s*Y:\s*(\d+)/);
            let x = 100, y = 100;
            if (match) {
                x = parseInt(match[1]);
                y = parseInt(match[2]);
            }

            const colorSample = document.getElementById('quickColorSample');
            const color = colorSample ? colorSample.style.backgroundColor : DEFAULT_COLORS[type] || '#2196F3';

            const assetData = {
                type: type,
                inventory_number: `${type.substring(0, 3).toUpperCase()}-${new Date().getTime().toString().slice(-6)}`,
                model: 'Базовая модель',
                custom_color: color,
                room_id: appState.currentRoom,
                x: x,
                y: y,
                sum: 0,
                responsible: 'Не указан'
            };

            hideModal('quickAddModal');
            showAddAssetModal(assetData);
        });
    }

    const cancelQuick = document.getElementById('cancelQuick');
    if (cancelQuick) {
        cancelQuick.addEventListener('click', () => {
            hideModal('quickAddModal');
        });
    }

    const changeQuickColor = document.getElementById('changeQuickColor');
    if (changeQuickColor) {
        changeQuickColor.addEventListener('click', function() {
            document.getElementById('colorPicker').click();
        });
    }

    const quickColors = document.getElementById('quickColors');
    if (quickColors) {
        COLOR_PALETTE.forEach(colorInfo => {
            const colorDiv = document.createElement('div');
            colorDiv.className = 'color-option';
            colorDiv.style.backgroundColor = colorInfo.color;
            colorDiv.title = colorInfo.name;
            colorDiv.addEventListener('click', function() {
                const quickColorSample = document.getElementById('quickColorSample');
                if (quickColorSample) {
                    quickColorSample.style.backgroundColor = colorInfo.color;
                }
                quickColors.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
            });
            quickColors.appendChild(colorDiv);
        });
    }

    const colorPicker = document.getElementById('colorPicker');
    if (colorPicker) {
        colorPicker.addEventListener('input', function() {
            const quickColorSample = document.getElementById('quickColorSample');
            const colorSample = document.getElementById('colorSample');
            if (quickColorSample) quickColorSample.style.backgroundColor = this.value;
            if (colorSample) colorSample.style.backgroundColor = this.value;
        });
    }

    const saveColor = document.getElementById('saveColor');
    if (saveColor) {
        saveColor.addEventListener('click', function() {
            if (!appState.selectedAssetId) return;

            const colorSample = document.getElementById('colorSample');
            const color = colorSample ? colorSample.style.backgroundColor : null;
            const displayMode = document.querySelector('input[name="displayMode"]:checked')?.value || 'icon';

            if (!color) return;

            let hexColor = color;
            if (color.startsWith('rgb')) {
                const rgb = color.match(/\d+/g);
                if (rgb && rgb.length >= 3) {
                    hexColor = '#' + ((1 << 24) + (parseInt(rgb[0]) << 16) + (parseInt(rgb[1]) << 8) + parseInt(rgb[2])).toString(16).slice(1);
                }
            }

            const updates = {
                custom_color: hexColor,
                show_icon: displayMode === 'icon'
            };

            updateAsset(appState.selectedAssetId, updates);
            addToHistory('color', appState.selectedAssetId, { color: hexColor });
            hideModal('colorModal');
        });
    }

    const cancelColor = document.getElementById('cancelColor');
    if (cancelColor) {
        cancelColor.addEventListener('click', () => {
            hideModal('colorModal');
        });
    }

    const changeColor = document.getElementById('changeColor');
    if (changeColor) {
        changeColor.addEventListener('click', function() {
            document.getElementById('colorPicker').click();
        });
    }

    const colorPalette = document.getElementById('colorPalette');
    if (colorPalette) {
        COLOR_PALETTE.forEach(colorInfo => {
            const colorDiv = document.createElement('div');
            colorDiv.className = 'color-option';
            colorDiv.style.backgroundColor = colorInfo.color;
            colorDiv.title = colorInfo.name;
            colorDiv.addEventListener('click', function() {
                const colorSample = document.getElementById('colorSample');
                if (colorSample) {
                    colorSample.style.backgroundColor = colorInfo.color;
                }
                colorPalette.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
            });
            colorPalette.appendChild(colorDiv);
        });
    }

    const saveAttach = document.getElementById('saveAttach');
    if (saveAttach) {
        saveAttach.addEventListener('click', function() {
            if (!appState.selectedAssetId) return;

            const furnitureId = document.getElementById('furnitureSelect').value;
            if (furnitureId) {
                attachDevice(appState.selectedAssetId, furnitureId);
            } else {
                detachDevice(appState.selectedAssetId);
            }

            hideModal('attachModal');
        });
    }

    const cancelAttach = document.getElementById('cancelAttach');
    if (cancelAttach) {
        cancelAttach.addEventListener('click', () => {
            hideModal('attachModal');
        });
    }

    const closeStats = document.getElementById('closeStats');
    if (closeStats) {
        closeStats.addEventListener('click', () => {
            hideModal('statsModal');
        });
    }

    const closeStatsModal = document.getElementById('closeStatsModal');
    if (closeStatsModal) {
        closeStatsModal.addEventListener('click', () => {
            hideModal('statsModal');
        });
    }

    const saveStatus = document.getElementById('saveStatus');
    if (saveStatus) {
        saveStatus.addEventListener('click', function() {
            if (!appState.selectedAssetId) return;

            const newStatus = document.getElementById('statusSelect').value;
            updateAsset(appState.selectedAssetId, { status: newStatus });
            addToHistory('status', appState.selectedAssetId, { status: newStatus });
            hideModal('statusModal');
        });
    }

    const cancelStatus = document.getElementById('cancelStatus');
    if (cancelStatus) {
        cancelStatus.addEventListener('click', () => {
            hideModal('statusModal');
        });
    }

    const closeStatusModal = document.getElementById('closeStatusModal');
    if (closeStatusModal) {
        closeStatusModal.addEventListener('click', () => {
            hideModal('statusModal');
        });
    }

    const saveImport = document.getElementById('saveImport');
    if (saveImport) {
        saveImport.addEventListener('click', function() {
            let importData = document.getElementById('importData').value;
            const importFile = document.getElementById('importFile');

            if (importFile.files.length > 0) {
                const file = importFile.files[0];
                const reader = new FileReader();
                reader.onload = function(e) {
                    try {
                        const data = JSON.parse(e.target.result);
                        processImportData(data);
                    } catch (error) {
                        alert('Ошибка чтения файла: ' + error.message);
                    }
                };
                reader.readAsText(file);
                return;
            }

            if (importData.trim()) {
                try {
                    const data = JSON.parse(importData);
                    processImportData(data);
                } catch (e) {
                    alert('Ошибка парсинга JSON: ' + e.message);
                }
            } else {
                alert('Выберите файл или введите JSON данные');
            }
        });
    }

    function processImportData(data) {
        if (!data || typeof data !== 'object') {
            alert('Неверный формат данных');
            return;
        }

        if (!data.assets && !Array.isArray(data)) {
            alert('Неверный формат данных. Ожидается объект с полем "assets" или массив активов');
            return;
        }

        if (!confirm('Импорт перезапишет все текущие данные. Продолжить?')) {
            return;
        }

        try {
            let assets = {};
            if (data.assets) {
                assets = data.assets;
            } else if (Array.isArray(data)) {
                data.forEach(asset => {
                    if (asset.id) {
                        assets[asset.id] = asset;
                    }
                });
            }

            const validAssets = {};
            let importedCount = 0;

            Object.values(assets).forEach(asset => {
                if (asset.id && asset.type) {
                    const validAsset = {
                        id: asset.id,
                        type: asset.type,
                        category: asset.category || DEVICE_TO_CATEGORY[asset.type] || 'device_movable',
                        inventory_number: asset.inventory_number || '',
                        model: asset.model || '',
                        serial_number: asset.serial_number || '',
                        sum: asset.sum || 0,
                        status: asset.status || 'active',
                        responsible: asset.responsible || '',
                        purchase_date: asset.purchase_date || null,
                        warranty_until: asset.warranty_until || null,
                        notes: asset.notes || '',
                        room_id: asset.room_id || null,
                        x: asset.x || 100,
                        y: asset.y || 100,
                        width: asset.width || ASSET_SIZES[asset.type] || DEFAULT_ICON_SIZE,
                        height: asset.height || ASSET_SIZES[asset.type] || DEFAULT_ICON_SIZE,
                        custom_color: asset.custom_color || DEFAULT_COLORS[asset.type] || '#2196F3',
                        show_icon: asset.show_icon !== false,
                        parent_id: asset.parent_id || null,
                        created_at: asset.created_at || new Date().toISOString(),
                        updated_at: new Date().toISOString()
                    };

                    validAssets[asset.id] = validAsset;
                    importedCount++;
                }
            });

            appState.assets = validAssets;
            appState.currentFloor = data.currentFloor || appState.currentFloor;
            appState.currentRoom = data.currentRoom || null;
            actionHistory = data.history || [];

            const maxId = Math.max(...Object.keys(validAssets).map(id => parseInt(id) || 0), 0);
            appState.lastAssetId = maxId;

            saveToLocalStorage();
            loadFloorPlan();
            updateUI();

            showStatus(`Импортировано ${importedCount} активов`);
            showToast(`Импортировано ${importedCount} активов`, 'success');
            hideModal('importModal');

            document.getElementById('importData').value = '';
            document.getElementById('importFile').value = '';

        } catch (error) {
            console.error('Ошибка импорта:', error);
            alert('Ошибка импорта данных: ' + error.message);
        }
    }

    const cancelImport = document.getElementById('cancelImport');
    if (cancelImport) {
        cancelImport.addEventListener('click', () => {
            hideModal('importModal');
        });
    }

    const closeImportModal = document.getElementById('closeImportModal');
    if (closeImportModal) {
        closeImportModal.addEventListener('click', () => {
            hideModal('importModal');
        });
    }

    const closeEditModal = document.getElementById('closeEditModal');
    if (closeEditModal) {
        closeEditModal.addEventListener('click', () => {
            hideModal('editAssetModal');
        });
    }

    const cancelEdit = document.getElementById('cancelEdit');
    if (cancelEdit) {
        cancelEdit.addEventListener('click', () => {
            hideModal('editAssetModal');
        });
    }

    const updateAsset = document.getElementById('updateAsset');
    if (updateAsset) {
        updateAsset.addEventListener('click', function() {
            // Эта функция переопределяется в showEditAssetModal
        });
    }

    const ctxEdit = document.getElementById('ctxEdit');
    if (ctxEdit) {
        ctxEdit.addEventListener('click', () => {
            hideContextMenu();
            if (appState.selectedAssetId) {
                showEditAssetModal();
            }
        });
    }

    const ctxColor = document.getElementById('ctxColor');
    if (ctxColor) {
        ctxColor.addEventListener('click', () => {
            hideContextMenu();
            if (appState.selectedAssetId) {
                showColorModal();
            }
        });
    }

    const ctxResize = document.getElementById('ctxResize');
    if (ctxResize) {
        ctxResize.addEventListener('click', () => {
            hideContextMenu();
            toggleResizeMode();
        });
    }

    const ctxAttach = document.getElementById('ctxAttach');
    if (ctxAttach) {
        ctxAttach.addEventListener('click', () => {
            hideContextMenu();
            showAttachModal();
        });
    }

    const ctxDetach = document.getElementById('ctxDetach');
    if (ctxDetach) {
        ctxDetach.addEventListener('click', () => {
            hideContextMenu();
            if (appState.selectedAssetId) {
                detachDevice(appState.selectedAssetId);
            }
        });
    }

    const ctxDelete = document.getElementById('ctxDelete');
    if (ctxDelete) {
        ctxDelete.addEventListener('click', () => {
            hideContextMenu();
            if (appState.selectedAssetId && confirm('Удалить выбранный актив?')) {
                deleteAsset(appState.selectedAssetId);
            }
        });
    }

    // ---------- Обработчики для плана этажа (только клики, без перемещения) ----------
    const floorPlan = document.getElementById('floorPlan');
    if (!floorPlan) return;

    floorPlan.addEventListener('click', function(e) {
        const room = e.target.closest('.room');
        const roomLabel = e.target.closest('.room-label');
        if ((room || roomLabel) && !appState.dragState && !appState.resizeState) {
            const roomElem = room || (roomLabel ? roomLabel.parentElement : null);
            if (roomElem) {
                const roomId = roomElem.dataset.roomId;

                // Если комната — это название этажа, переключаем план этажа
                const floorNames = Object.keys(ROOM_MAP); // ["Главная схема", "Первый этаж", "Второй этаж"]
                if (floorNames.includes(roomId)) {
                    // Переключение этажа
                    appState.currentFloor = roomId;
                    const floorSelect = document.getElementById('floorSelect');
                    if (floorSelect) floorSelect.value = roomId;
                    loadFloorPlan();
                    showStatus(`Переключен на этаж: ${roomId}`);
                } else {
                    // Обычная комната
                    loadRoomView(roomId);
                    showStatus(`Загружена комната: ${roomId}`);
                }
            }
        }

        const asset = e.target.closest('.asset');
        const assetIcon = e.target.closest('.asset-icon');
        const assetLabel = e.target.closest('.asset-label');

        if ((asset || assetIcon || assetLabel) && !appState.dragState && !appState.resizeState) {
            const assetElem = asset ||
                             (assetIcon ? assetIcon.parentElement : null) ||
                             (assetLabel ? assetLabel.parentElement : null);
            if (assetElem) {
                const assetId = assetElem.dataset.assetId;
                selectAsset(assetId);
            }
        }

        if (!room && !roomLabel && !asset && !assetIcon && !assetLabel &&
            appState.pendingAssetType && !appState.dragState && !appState.resizeState) {

            const rect = floorPlan.getBoundingClientRect();
            let x = (e.clientX - rect.left) / appState.zoomLevel;
            let y = (e.clientY - rect.top) / appState.zoomLevel;
            x = x - appState.panOffset.x;
            y = y - appState.panOffset.y;
            x = Math.round(x);
            y = Math.round(y);
            x = Math.max(0, Math.min(x, rect.width));
            y = Math.max(0, Math.min(y, rect.height));

            if (appState.currentRoom) {
                const assetData = {
                    type: appState.pendingAssetType,
                    inventory_number: `${appState.pendingAssetType.substring(0, 3).toUpperCase()}-${new Date().getTime().toString().slice(-6)}`,
                    model: 'Базовая модель',
                    room_id: appState.currentRoom,
                    x: x,
                    y: y,
                    sum: 0,
                    responsible: 'Не указан'
                };
                showAddAssetModal(assetData);
                appState.pendingAssetType = null;
            } else {
                showStatus('Сначала выберите комнату', 3000);
            }
        }

        if (!room && !roomLabel && !asset && !assetIcon && !assetLabel &&
            !appState.dragState && !appState.resizeState) {
            deselectAsset();
        }
    });

    floorPlan.addEventListener('dblclick', function(e) {
        const room = e.target.closest('.room');
        if (room && !appState.dragState && !appState.resizeState) {
            const roomId = room.dataset.roomId;

            if (roomId === 'Первый этаж' || roomId === 'Второй этаж') {
                appState.currentFloor = roomId;
                const floorSelect = document.getElementById('floorSelect');
                if (floorSelect) floorSelect.value = roomId;
                loadFloorPlan();
                showStatus(`Переключен на этаж: ${roomId}`);
            } else {
                loadRoomView(roomId);
                showStatus(`Загружена комната: ${roomId}`);
            }
        }
        if (e.ctrlKey) {
            e.preventDefault();
            toggleResizeMode();
        }
    });

    floorPlan.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        const asset = e.target.closest('.asset');
        if (asset) {
            const assetId = asset.dataset.assetId;
            selectAsset(assetId);
            const contextMenu = document.getElementById('contextMenu');
            if (contextMenu) {
                contextMenu.style.left = `${e.clientX}px`;
                contextMenu.style.top = `${e.clientY}px`;
                contextMenu.classList.add('active');
            }
        } else if (appState.currentRoom) {
            const rect = floorPlan.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const quickPosition = document.getElementById('quickPosition');
            if (quickPosition) quickPosition.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
            const defaultColor = DEFAULT_COLORS['Стол'] || '#2196F3';
            const quickColorSample = document.getElementById('quickColorSample');
            if (quickColorSample) quickColorSample.style.backgroundColor = defaultColor;
            showModal('quickAddModal');
        }
    });

    document.addEventListener('click', function(e) {
        const contextMenu = document.getElementById('contextMenu');
        if (contextMenu && !e.target.closest('.context-menu')) {
            contextMenu.classList.remove('active');
        }
    });

    // Заглушки для перетаскивания/изменения размера/панорамирования – они больше не нужны
    floorPlan.addEventListener('mousedown', function(e) {
        // ничего не делаем
    });

    // Убираем глобальные обработчики перемещения мыши
    // (были document.addEventListener('mousemove', ...) и document.addEventListener('mouseup', ...)) – удалены

    floorPlan.addEventListener('wheel', function(e) {
        e.preventDefault();
    });
}
            function showAddAssetModal(prefillData = null) {
                if (!appState.currentRoom) {
                    alert('Сначала выберите комнату');
                    return;
                }
                
                if (prefillData) {
                    const assetType = document.getElementById('assetType');
                    const assetInvNumber = document.getElementById('assetInvNumber');
                    const assetModel = document.getElementById('assetModel');
                    const assetSum = document.getElementById('assetSum');
                    const assetResponsible = document.getElementById('assetResponsible');
                    
                    if (assetType) assetType.value = prefillData.type;
                    if (assetInvNumber) assetInvNumber.value = prefillData.inventory_number;
                    if (assetModel) assetModel.value = prefillData.model;
                    if (assetSum) assetSum.value = prefillData.sum;
                    if (assetResponsible) assetResponsible.value = prefillData.responsible;
                }
                
                showModal('addAssetModal');
            }
            
            function showEditAssetModal() {
                if (!appState.selectedAssetId) return;
                
                const asset = appState.assets[appState.selectedAssetId];
                if (!asset) return;
                
                const modalBody = document.getElementById('editModalBody');
                if (!modalBody) return;
                
                modalBody.innerHTML = `
                    <div class="form-group">
                        <label class="form-label required">Тип оборудования:</label>
                        <input type="text" class="form-control" id="editAssetType" value="${asset.type}" disabled>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label required" for="editAssetInvNumber">Инвентарный номер:</label>
                            <input type="text" class="form-control" id="editAssetInvNumber" value="${asset.inventory_number || ''}" placeholder="Введите инвентарный номер">
                            <span class="error-message" id="editAssetInvNumberError"></span>
                        </div>
                        <div class="form-group">
                            <label class="form-label required" for="editAssetModel">Модель:</label>
                            <input type="text" class="form-control" id="editAssetModel" value="${asset.model || ''}" placeholder="Введите модель">
                            <span class="error-message" id="editAssetModelError"></span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="editAssetSerial">Серийный номер:</label>
                        <input type="text" class="form-control" id="editAssetSerial" value="${asset.serial_number || ''}" placeholder="Введите серийный номер">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label required" for="editAssetSum">Сумма (сум):</label>
                        <input type="number" class="form-control" id="editAssetSum" value="${asset.sum || 0}" min="0" step="1000">
                        <span class="error-message" id="editAssetSumError"></span>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="editAssetStatus">Статус:</label>
                        <select class="form-control" id="editAssetStatus">
                            ${Object.entries(ASSET_STATUSES).map(([key, status]) => 
                                `<option value="${key}" ${asset.status === key ? 'selected' : ''}>${status.name}</option>`
                            ).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label required" for="editAssetResponsible">Ответственный:</label>
                        <input type="text" class="form-control" id="editAssetResponsible" value="${asset.responsible || ''}" placeholder="ФИО ответственного">
                        <span class="error-message" id="editAssetResponsibleError"></span>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label" for="editAssetPurchaseDate">Дата приобретения:</label>
                            <input type="date" class="form-control" id="editAssetPurchaseDate" value="${asset.purchase_date || ''}">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="editAssetWarranty">Гарантия до:</label>
                            <input type="date" class="form-control" id="editAssetWarranty" value="${asset.warranty_until || ''}">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="editAssetNotes">Примечания:</label>
                        <textarea class="form-control" id="editAssetNotes" rows="3" placeholder="Введите примечания...">${asset.notes || ''}</textarea>
                    </div>
                    
                    <div class="text-warning" style="font-size: 12px; margin-top: 20px;">
                        * - обязательное поле
                    </div>
                `;
                
                const updateAssetBtn = document.getElementById('updateAsset');
                if (updateAssetBtn) {
                    // Убираем старые обработчики и добавляем новый
                    const newUpdateBtn = updateAssetBtn.cloneNode(true);
                    updateAssetBtn.parentNode.replaceChild(newUpdateBtn, updateAssetBtn);
                    
                    newUpdateBtn.addEventListener('click', function() {
                        const invNumber = document.getElementById('editAssetInvNumber').value.trim();
                        const model = document.getElementById('editAssetModel').value.trim();
                        const responsible = document.getElementById('editAssetResponsible').value.trim();
                        const sum = parseFloat(document.getElementById('editAssetSum').value) || 0;
                        
                        const updates = {
                            inventory_number: invNumber,
                            model: model,
                            serial_number: document.getElementById('editAssetSerial').value.trim(),
                            sum: sum,
                            status: document.getElementById('editAssetStatus').value,
                            responsible: responsible,
                            purchase_date: document.getElementById('editAssetPurchaseDate').value || null,
                            warranty_until: document.getElementById('editAssetWarranty').value || null,
                            notes: document.getElementById('editAssetNotes').value.trim()
                        };
                        
                        const validation = validateAssetData({
                            ...asset,
                            ...updates
                        });
                        
                        if (!validation.isValid) {
                            showValidationErrors(validation.errors, 'editAsset');
                            return;
                        }
                        
                        updateAsset(appState.selectedAssetId, updates);
                        hideModal('editAssetModal');
                    });
                }
                
                showModal('editAssetModal');
            }
            
            function showColorModal() {
                if (!appState.selectedAssetId) return;
                
                const asset = appState.assets[appState.selectedAssetId];
                if (!asset) return;
                
                const colorAssetName = document.getElementById('colorAssetName');
                if (colorAssetName) {
                    colorAssetName.textContent = asset.type;
                }
                
                const color = asset.custom_color || DEFAULT_COLORS[asset.type] || '#2196F3';
                const colorSample = document.getElementById('colorSample');
                if (colorSample) {
                    colorSample.style.backgroundColor = color;
                }
                
                document.querySelectorAll('#colorPalette .color-option').forEach(opt => {
                    opt.classList.remove('selected');
                    if (opt.style.backgroundColor === color) {
                        opt.classList.add('selected');
                    }
                });
                
                const showIcon = asset.show_icon !== false;
                const iconRadio = document.querySelector(`input[name="displayMode"][value="${showIcon ? 'icon' : 'color'}"]`);
                if (iconRadio) {
                    iconRadio.checked = true;
                }
                
                showModal('colorModal');
            }
            
            function showAttachModal() {
                if (!appState.selectedAssetId) return;
                
                const asset = appState.assets[appState.selectedAssetId];
                if (!asset || !(asset.category === 'device_fixed' || asset.category === 'device_movable')) {
                    alert('Выберите устройство для прикрепления');
                    return;
                }
                
                const furnitureSelect = document.getElementById('furnitureSelect');
                if (!furnitureSelect) return;
                
                furnitureSelect.innerHTML = '<option value="">Не прикреплять</option>';
                
                Object.values(appState.assets).forEach(furniture => {
                    if (furniture.category === 'furniture' && furniture.room_id === appState.currentRoom) {
                        const option = document.createElement('option');
                        option.value = furniture.id;
                        option.textContent = `${furniture.type} (${furniture.inventory_number || 'Без номера'})`;
                        if (asset.parent_id === furniture.id) {
                            option.selected = true;
                        }
                        furnitureSelect.appendChild(option);
                    }
                });
                
                showModal('attachModal');
            }
            
            function showStatsModal() {
                const stats = getStatistics();
                const content = document.getElementById('statsContentModal');
                if (!content) return;
                
                let html = `
                    <div style="color: var(--text-primary);">
                        <h3 style="color: var(--primary-light); margin-bottom: 15px;">Статистика инвентаризации</h3>
                        <hr style="border-color: var(--border); margin-bottom: 15px;">
                        <p><strong>Всего активов:</strong> ${stats.total_assets}</p>
                        <p><strong>Общая сумма:</strong> ${formatSum(stats.total_sum)}</p>
                        
                        <h4 style="color: var(--primary-light); margin-top: 20px; margin-bottom: 10px;">По категориям:</h4>
                `;
                
                for (const [category, count] of Object.entries(stats.by_category)) {
                    html += `<p>${category}: ${count}</p>`;
                }
                
                html += `
                        <h4 style="color: var(--primary-light); margin-top: 20px; margin-bottom: 10px;">По статусам:</h4>
                `;
                
                for (const [status, count] of Object.entries(stats.by_status)) {
                    html += `<p>${status}: ${count}</p>`;
                }
                
                html += `
                        <h4 style="color: var(--primary-light); margin-top: 20px; margin-bottom: 10px;">По этажам:</h4>
                `;
                
                for (const [floor, count] of Object.entries(stats.by_floor)) {
                    html += `<p>${floor}: ${count}</p>`;
                }
                
                html += `
                    </div>
                `;
                
                content.innerHTML = html;
                showModal('statsModal');
            }
            
            function showStatusModal() {
                if (!appState.selectedAssetId) return;
                
                const asset = appState.assets[appState.selectedAssetId];
                if (!asset) return;
                
                const statusSelect = document.getElementById('statusSelect');
                if (statusSelect) {
                    statusSelect.value = asset.status || 'active';
                }
                
                showModal('statusModal');
            }
            
            function hideContextMenu() {
                const contextMenu = document.getElementById('contextMenu');
                if (contextMenu) {
                    contextMenu.classList.remove('active');
                }
            }
            
            function refreshView() {
                if (appState.viewMode === 'floor') {
                    loadFloorPlan();
                } else if (appState.viewMode === 'room' && appState.currentRoom) {
                    loadRoomView(appState.currentRoom);
                }
                
                showStatus('Вид обновлен (F5)');
            }
            
            function getStatistics() {
                const assets = Object.values(appState.assets);
                const total = assets.length;
                const total_sum = assets.reduce((sum, asset) => sum + (asset.sum || 0), 0);
                
                const by_category = {};
                assets.forEach(asset => {
                    const category = ASSET_CATEGORIES[asset.category] || asset.category;
                    by_category[category] = (by_category[category] || 0) + 1;
                });
                
                const by_status = {};
                assets.forEach(asset => {
                    const status = ASSET_STATUSES[asset.status]?.name || asset.status;
                    by_status[status] = (by_status[status] || 0) + 1;
                });
                
                const by_floor = {};
                assets.forEach(asset => {
                    const floor = asset.room_id ? 'В комнатах' : 'Не назначено';
                    by_floor[floor] = (by_floor[floor] || 0) + 1;
                });
                
                return {
                    total_assets: total,
                    total_sum: total_sum,
                    by_category: by_category,
                    by_status: by_status,
                    by_floor: by_floor
                };
            }
            
            function exportToJSON() {
                const data = {
                    assets: appState.assets,
                    currentFloor: appState.currentFloor,
                    currentRoom: appState.currentRoom,
                    history: actionHistory,
                    exported: new Date().toISOString(),
                    version: VERSION
                };
                
                const jsonStr = JSON.stringify(data, null, 2);
                const blob = new Blob([jsonStr], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = `inventory_export_${new Date().toISOString().slice(0,10)}.json`;
                a.click();
                
                URL.revokeObjectURL(url);
                showStatus('Данные экспортированы в JSON');
                showToast('Данные экспортированы в JSON', 'success');
            }
            
            function exportToCSV() {
                const assets = Object.values(appState.assets);
                
                const headers = [
                    'ID', 'Тип', 'Категория', 'Инвентарный номер', 'Модель', 
                    'Серийный номер', 'Статус', 'Комната', 'X', 'Y', 
                    'Ширина', 'Высота', 'Сумма', 'Ответственный', 
                    'Дата приобретения', 'Гарантия до', 'Примечания'
                ];
                
                const rows = assets.map(asset => [
                    asset.id,
                    asset.type,
                    ASSET_CATEGORIES[asset.category] || asset.category,
                    asset.inventory_number || '',
                    asset.model || '',
                    asset.serial_number || '',
                    ASSET_STATUSES[asset.status]?.name || asset.status || '',
                    asset.room_id || '',
                    asset.x || '',
                    asset.y || '',
                    asset.width || '',
                    asset.height || '',
                    asset.sum || '',
                    asset.responsible || '',
                    asset.purchase_date || '',
                    asset.warranty_until || '',
                    (asset.notes || '').replace(/,/g, ';').replace(/\n/g, ' ')
                ]);
                
                const csvContent = [
                    headers.join(','),
                    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
                ].join('\n');
                
                const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = `inventory_export_${new Date().toISOString().slice(0,10)}.csv`;
                a.click();
                
                URL.revokeObjectURL(url);
                showStatus('Данные экспортированы в CSV');
                showToast('Данные экспортированы в CSV', 'success');
            }
            
            function drawRoomAssets(roomId) {
    const floorPlan = document.getElementById('floorPlan');
    if (!floorPlan) return;
    
    // Удаляем только активы, оставляя комнаты и другие элементы
    document.querySelectorAll('.asset').forEach(asset => asset.remove());
    
    const roomAssets = Object.values(appState.assets).filter(asset => asset.room_id === roomId);
    
    // ИСПРАВЛЕНО: Временно сбрасываем pan offset для правильного позиционирования
    const savedOffsets = { ...appState.panOffset };
    appState.panOffset = { x: 0, y: 0 };
    
    // ИСПРАВЛЕНО: Сначала создаем все элементы
    const elements = [];
    roomAssets.forEach(asset => {
        // Проверяем и исправляем координаты если нужно
        if (asset.x === undefined || asset.x === null || isNaN(asset.x)) {
            asset.x = 100;
        }
        if (asset.y === undefined || asset.y === null || isNaN(asset.y)) {
            asset.y = 100;
        }
        
        const assetElement = createAssetElement(asset);
        elements.push(assetElement);
    });
    
    // Добавляем все элементы в DOM
    elements.forEach(element => {
        floorPlan.appendChild(element);
    });
    
    // Восстанавливаем pan offset
    appState.panOffset = savedOffsets;
    
    // Если нет активов, показываем подсказку
    if (roomAssets.length === 0) {
        const hint = document.createElement('div');
        hint.style.position = 'absolute';
        hint.style.top = '50%';
        hint.style.left = '50%';
        hint.style.transform = 'translate(-50%, -50%)';
        hint.style.color = 'var(--text-secondary)';
        hint.style.fontSize = '16px';
        hint.style.textAlign = 'center';
        hint.style.padding = '20px';
        hint.style.backgroundColor = 'rgba(0,0,0,0.5)';
        hint.style.borderRadius = '8px';
        hint.style.zIndex = '1000';
        hint.innerHTML = `
            <div style="margin-bottom: 15px;"><i class="fas fa-info-circle" style="font-size: 48px;"></i></div>
            <div>В этой комнате нет активов</div>
            <div style="font-size: 14px; margin-top: 10px;">1. Выберите объект слева</div>
            <div style="font-size: 14px;">2. Кликните на плане для размещения</div>
            <div style="font-size: 14px;">Или нажмите F2 для быстрого добавления</div>
        `;
        floorPlan.appendChild(hint);
    }
    
    console.log(`Drew ${roomAssets.length} assets in room ${roomId}`);
}

            
            window.addEventListener('DOMContentLoaded', initApp);
            
            window.addEventListener('beforeunload', function(e) {
                if (Object.keys(appState.assets).length > 0) {
                    saveToLocalStorage();
                }
            });
            
            setInterval(() => {
                if (Object.keys(appState.assets).length > 0) {
                    scheduleAutoSave();
                }
            }, 60000);
        })();

        // Logout handler
        document.addEventListener('DOMContentLoaded', function() {
            const logoutBtn = document.getElementById('logoutBtn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', function() {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.location.href = 'login.html';
                });
            }
        });

function debugAssets() {
    console.group('=== ASSETS DEBUG ===');
    
    const assets = Object.values(appState.assets);
    console.log(`Total assets: ${assets.length}`);
    
    let positionMismatchCount = 0;
    
    assets.forEach(asset => {
        const element = document.getElementById(`asset-${asset.id}`);
        const storedPos = { x: asset.x, y: asset.y };
        let elementPos = null;
        let mismatch = false;
        
        if (element) {
            elementPos = getElementPosition(element);
            mismatch = Math.abs(storedPos.x - elementPos.x) > 1 || Math.abs(storedPos.y - elementPos.y) > 1;
            if (mismatch) positionMismatchCount++;
        }
        
        console.log(`Asset ${asset.id} (${asset.type}):`, {
            stored: storedPos,
            element: elementPos || 'NOT FOUND',
            mismatch: mismatch,
            inDOM: !!element
        });
    });
    
    console.log(`Position mismatches: ${positionMismatchCount}`);
    console.log('Pan offset:', appState.panOffset);
    console.log('Zoom level:', appState.zoomLevel);
    console.log('View mode:', appState.viewMode);
    console.log('Current room:', appState.currentRoom);
    
    console.groupEnd();
    
    return {
        totalAssets: assets.length,
        mismatches: positionMismatchCount,
        panOffset: appState.panOffset,
        zoomLevel: appState.zoomLevel
    };
}

// Добавьте вызов в консоль для отладки
window.debugAssets = debugAssets;