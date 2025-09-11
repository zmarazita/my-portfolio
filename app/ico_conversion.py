from PIL import Image

# Open PNG
img = Image.open("C:\Users\Zoe Marazita\my-portfolio\public\logo2.png")

# Resize to 32x32
img = img.resize((32, 32), Image.LANCZOS)

# Save as ICO
img.save("C:\Users\Zoe Marazita\my-portfolio\public\favicon.ico", format="ICO")
