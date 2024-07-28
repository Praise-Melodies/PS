import json

def arabic_to_franco(text):
    # Dictionary to map Arabic characters to Franco
    franco_map = {
        'ا': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'j', 'ح': '7', 'خ': 'kh',
        'د': 'd', 'ذ': 'th', 'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh', 'ص': '9',
        'ض': '9', 'ط': '6', 'ظ': '6', 'ع': '3', 'غ': 'gh', 'ف': 'f', 'ق': 'q',
        'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n', 'ه': 'h', 'و': 'w', 'ي': 'y',
        'أ': 'a', 'إ': 'e', 'آ': 'a', 'ؤ': 'w', 'ئ': 'y', 'ى': 'a', 'ة': 'h'
    }
    
    franco_text = ""
    for char in text:
        franco_text += franco_map.get(char, char)
    
    return franco_text

def translate_file(input_file_path, output_file_path):
    # Load the JSON data from the provided file
    with open(input_file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    # Write loaded data to a debug file
    with open('debug_loaded_data.txt', 'w', encoding='utf-8') as debug_file:
        debug_file.write(str(data))
    
    # Check if data is a dictionary or list
    if isinstance(data, dict):
        items = [data]  # Convert dict to list of one item
    elif isinstance(data, list):
        items = data
    else:
        raise ValueError("Unsupported JSON format")
    
    # Translate the text using the franco dictionary
    translated_data = []
    for item in items:
        if not isinstance(item, dict):
            raise ValueError("Each item in the JSON list should be a dictionary")
        
        # Ensure all expected keys exist in the item dictionary
        if "title" in item and "verses" in item:
            translated_item = {
                "title": arabic_to_franco(item["title"]),
                "formated": item.get("formated", ""),
                "chorusFirst": item.get("chorusFirst", False),
                "chorus": [arabic_to_franco(line) for line in item.get("chorus", [])],
                "verses": [[arabic_to_franco(line) for line in verse] for verse in item.get("verses", [])]
            }
            translated_data.append(translated_item)
        else:
            with open('debug_missing_keys.txt', 'a', encoding='utf-8') as debug_file:
                debug_file.write(f"Skipping item due to missing keys: {item}\n")
    
    # Save the combined translated data to a new JSON file
    with open(output_file_path, 'w', encoding='utf-8') as file:
        json.dump(translated_data, file, ensure_ascii=False, indent=4)

# File paths (replace with your actual file paths)
input_file_path = r'C:\Users\mina-\Desktop\hany\DB(without-id)\tasbe7naDBARb.json'
output_file_path = r'C:\Users\mina-\Desktop\hany\DB(without-id)\translated_tesp7naENG.json'

# Translate the file
translate_file(input_file_path, output_file_path)
