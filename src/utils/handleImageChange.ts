export function handleImageChange(
  e: React.ChangeEvent<HTMLInputElement>,
  setImage: React.Dispatch<React.SetStateAction<File | null>>
) {
  const file = e.target.files?.[0];
  if (file) {
    // Check if size is greater than 3MB
    if (file.size > 3500000) {
      alert("Image size must not exceed 3MB");
      e.target.value = "";
      return;
    }
    setImage(file);
  } else {
    setImage(null);
  }
}
