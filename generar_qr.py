import qrcode

# URL de tu página en Vercel
url = 'https://velmonte.vercel.app/'

# Crear el objeto QR
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Agregar la URL al objeto QR
qr.add_data(url)
qr.make(fit=True)

# Crear la imagen del QR
img = qr.make_image(fill_color="black", back_color="white")

# Guardar la imagen en un archivo
img.save('qr_code.png')
