# PasswordGenerate_Vanilla

# Vanilla Password Generator

A beautiful and secure password generator built with vanilla JavaScript, featuring a clean and elegant user interface.

## Features

- **Customizable Password Generation**: Choose from uppercase letters, lowercase letters, numbers, and symbols
- **Copy to Clipboard**: One-click copying of generated passwords
- **Elegant UI**: Beautiful gradient background and card design with smooth animations

## How to Use

1. Select the character types you want to include in your password:
   - Uppercase letters (A-Z)
   - Lowercase letters (a-z)
   - Numbers (0-9)
   - Symbols (!#$%&()\*+/?@)
2. Click the "Generate Password" button to create a 18-character secure password

3. Click the copy icon to copy the generated password to your clipboard

## Technical Details

This project uses:

- HTML5 for structure
- Tailwind CSS for utility-based styling
- Custom CSS for animations and visual enhancements
- Vanilla JavaScript for password generation logic
- Font Awesome for icons
- Google Fonts (Inter and Playfair Display) for typography

The password generation algorithm creates truly random passwords by selecting characters from the chosen character sets.

## Browser Compatibility

Works in all modern browsers that support:

- ES6 JavaScript features
- CSS Grid and Flexbox
- Clipboard API

## Installation

No installation required!

## File Structure

```
password-generator/
├── index.html
├── logic.js
└── README.md
```

## License

© 2025 Vanilla Password Generator. All rights reserved.

## Developer

Created by PrimeSafar - [GitHub](https://github.com/PrimeSafar)

## Security Note

This password generator creates strong, random passwords suitable for most applications. For maximum security, always:

- Use long passwords (15+ characters)
- Include multiple character types
- Avoid reusing passwords across different services
- Consider using a password manager to store your generated passwords
