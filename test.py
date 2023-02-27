from Crypto.Cipher import AES

# Key used for encryption/decryption
key = "AES-256".encode('utf-8')

# Read the encrypted file
with open("encrypted.aes-256-cbc", "rb") as f:
    encrypted_data = f.read()

# Initialization Vector (IV)
iv = encrypted_data[:AES.block_size]

# Create the AES cipher object
cipher = AES.new(key, AES.MODE_CBC, iv)

# Decrypt the encrypted data
decrypted_data = cipher.decrypt(encrypted_data[AES.block_size:])

# Remove padding from the decrypted data
decrypted_data = decrypted_data.rstrip(b'\0')

# Write the decrypted data to a file
with open("decrypted_message.txt", "wb") as f:
    f.write(decrypted_data)
