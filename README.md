# Number Formatter CLI Tool

A simple CLI utility written in Node.js that reads numbers from a file, formats them with a currency symbol and custom thousands separator, and writes the output to a new file.

## 🚀 Features

- Formats numbers with a specified currency symbol and thousands separator.
- Reads input from a source file (`src.txt`) and writes to a destination file (`dest.txt`).
- Handles large files efficiently using Node.js streams.
- Cross-platform compatible.


## 🛠️ How It Works

- Numbers are streamed from `src.txt`.
- Each number is parsed and formatted using:
  - A currency symbol (e.g. `$`)
  - A divider/separator (e.g. `,`)
- The formatted result is saved to `dest.txt`.

## 📥 Input Example (`src.txt`)

100000 500000 3000000

## 📤 Output Example (`dest.txt`)

$100,000 $500,000 $3,000,000

## Notes

- Input file (src.txt) should contain numbers separated by spaces.

- Output will be written to dest.txt with formatted values.

- Large numbers or long files are handled efficiently using streams.
