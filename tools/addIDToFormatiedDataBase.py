import json

# File paths
input_file_path = r'C:\Users\mina-\Desktop\hany\translated_tesp7naFNK.json'
output_file_path = r'C:\Users\mina-\Desktop\hany\tasbe7naDBFrancoWithSongID.json'

# Read the input JSON file
with open(input_file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Add numerical element 'id' to each song in the data list
for idx, song in enumerate(data, start=1):
    song["songID"] = idx

# Write the modified data to the output JSON file
with open(output_file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print(f"Modified data has been written to {output_file_path}")
