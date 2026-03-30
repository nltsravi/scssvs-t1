import os
import PyPDF2

def extract_text(pdf_path, out_path):
    try:
        with open(pdf_path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            text = ""
            for page in reader.pages:
                extracted = page.extract_text()
                if extracted:
                    text += extracted + "\n\n"
        with open(out_path, 'w', encoding='utf-8') as out:
            out.write(text)
        print(f"Extracted: {pdf_path} => {out_path}")
    except Exception as e:
        print(f"Failed {pdf_path}: {e}")

if __name__ == '__main__':
    pdfs = [
        "Activity Details.pdf",
        "Shastra Vidya Sthanam - English 2026 (1).pdf",
        "Shastravidyasthanam - Tamil (1).pdf",
        "संस्कृतम्.pdf"
    ]
    for p in pdfs:
        out = p + ".txt"
        extract_text(p, out)
