import cv2
import numpy as np

# Путь к вашей огромной картинке
IMAGE_PATH = '1_etaj.jpg' 

# Целевое разрешение, которое требует программа инвентаризации
PROGRAM_W = 1240
PROGRAM_H = 740

current_room_points = []
room_counter = 16  # Начинаем с 16-й комнаты

def click_event(event, x, y, flags, params):
    global current_room_points, room_counter
    
    if img_resized is None: return
    sf = params['sf']

    if event == cv2.EVENT_LBUTTONDOWN:
        current_room_points.append((x, y))
        
        # Визуальный маркер клика
        cv2.circle(img_resized, (x, y), 3, (0, 0, 255), -1)
        cv2.imshow('Схема комнат', img_resized)
        
        if len(current_room_points) == 2:
            wx1, wy1 = current_room_points[0]
            wx2, wy2 = current_room_points[1]
            
            # 1. Сначала пересчитываем клик окна в ОРИГИНАЛЬНЫЕ пиксели (6614х3886)
            ox1, oy1 = wx1 / sf, wy1 / sf
            ox2, oy2 = wx2 / sf, wy2 / sf
            
            # 2. Затем переводим оригинальные пиксели в масштаб ПРОГРАММЫ (1240х740)
            px1 = int((ox1 / orig_w) * PROGRAM_W)
            py1 = int((oy1 / orig_h) * PROGRAM_H)
            px2 = int((ox2 / orig_w) * PROGRAM_W)
            py2 = int((oy2 / orig_h) * PROGRAM_H)
            
            # Вывод готовой строки для JSON
            json_line = f'"Комната {room_counter}": [ {px1}, {py1}, {px2}, {py2} ],'
            print("\n--- Скопируйте это в JSON (Размер под ПРОГРАММУ) ---")
            print(json_line)
            print("--------------------------------------------------\n")
            
            # Рисуем зеленый прямоугольник подтверждения
            cv2.rectangle(img_resized, (wx1, wy1), (wx2, wy2), (0, 255, 0), 2)
            cv2.imshow('Схема комнат', img_resized)
            
            current_room_points = []
            room_counter += 1

# Загружаем оригинал
img_original = cv2.imread(IMAGE_PATH)

if img_original is None:
    print(f"Ошибка: Не удалось найти файл {IMAGE_PATH}.")
else:
    orig_h, orig_w = img_original.shape[:2]

    # Размер окна для вашего монитора (удобный для глаз)
    target_width = 1400 
    sf = target_width / orig_w
    if sf > 1.0: sf = 1.0 
    target_height = int(orig_h * sf)
    
    img_resized: np.ndarray = cv2.resize(img_original, (target_width, target_height))
    
    print(f"Оригинал: {orig_w}x{orig_h} px.")
    print(f"Конвертация идет в систему координат: {PROGRAM_W}x{PROGRAM_H} px.")
    print("Окна вывода на экран настроено под ваш монитор.")

    cv2.namedWindow('Схема комнат', cv2.WINDOW_AUTOSIZE)
    mouse_params = {'sf': sf}
    cv2.setMouseCallback('Схема комнат', click_event, mouse_params)
    
    cv2.imshow('Схема комнат', img_resized)
    cv2.waitKey(0)
    cv2.destroyAllWindows()