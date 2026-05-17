from PIL import Image
import numpy as np

img = Image.open('sse.png').convert('RGBA')
arr = np.array(img)

# original image has light background and dark text.
# let's convert to grayscale
gray = np.mean(arr[:, :, :3], axis=2)

# we want dark text to be opaque (alpha=255) and light bg to be transparent (alpha=0)
# alpha = 255 - grayscale
alpha = 255 - gray

# but we might want to boost contrast of alpha so background is fully 0.
# let's say anything > 240 in grayscale becomes 0 alpha.
# and anything < 100 becomes 255.
alpha = (255 - gray) * 1.5
alpha = np.clip(alpha, 0, 255).astype(np.uint8)

# Now, we want a white version and a maroon version.
# Let's make a white version:
white_arr = np.zeros_like(arr)
white_arr[:,:,0] = 255
white_arr[:,:,1] = 255
white_arr[:,:,2] = 255
white_arr[:,:,3] = alpha
Image.fromarray(white_arr).save('sse-white.png')

# Let's make a maroon version (hex #6D0F1B -> 109, 15, 27)
maroon_arr = np.zeros_like(arr)
maroon_arr[:,:,0] = 109
maroon_arr[:,:,1] = 15
maroon_arr[:,:,2] = 27
maroon_arr[:,:,3] = alpha
Image.fromarray(maroon_arr).save('sse-maroon.png')
print("Done")
