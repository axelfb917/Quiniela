const crypto = require('crypto');

const lines = [
  "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQDUrTdJtpG5Yp",
  "wFrmvVkshJmenZyjmiu+nK38FQZjMIV/qXKsFhTvimDC3EujEZ2AGDr0AcnFqo2D",
  "hsepBt0297q1SDgXjR4Qpp/WFpYuKgtOslIijO2CDFy+SR88XfGmFQwUR21Y6XAq",
  "He/FZwfSoceh2RwL1ggRzD8kuikEo1VshbBJ71QP5fziZdlcsTYYIvNNc611xEpx",
  "ryehPcb2dPRqML3RzXoJf5kUgfW1KhO2+VWDKfTmivtRatIZw0PCBN9QLmPaCz90",
  "IgRgFMV52LrBNLumS0BKMhknMvjGYguWkQtS8eKQaQAFPBZqgmZh/hsJHtWvJJkU",
  "Dp1sc94bAgMBAAECggEAB1bwtNUARoz6ly56BnnXk4J6COZ2iC8ALBFK8gGr4APu",
  "MbrAmOGOi4TONRGgeXg9ni88pS8K9zY1F9bBZG0hkLbcl1ic4ffQf7XhHaReV/KT",
  "w4r26tEd7+CPxQa/W1nVFI7Zhj2e1ewmUNYNh2FDHWMnr8YA/0nlrvsNnzYSDF/G",
  "XxHC7clDiDg0hEGrrDmUiI8SZANoiItlMEFtHaIbs+N13ngPXxzDDYugqV1mQInQ",
  "aLETxpf4CeDe7Eh/art47DC4+sz7OVEzbCKxvUkk27OkbCABU0LyPr5y74Xcwfgt",
  "xYFi/ZJU+8l+rAhmNoruNkDNgyeCM/wI4GRvgp1OwQKBgQD+luySKRaFqMH8o06i",
  "UNcH+m7fqKtP2xGvnu+T2UeZG1cvQ1rOsjZTLhwjuUWKE+9MGshMAwYJrCaLsacq",
  "i8BvhtlwO8StjKkDUWRv/gyQVu2PZKyQ9S/gdTFX2vVJFrB71Ik/SISoMbgXQVIa",
  "a1454y0xQFycowKdOK9VwvWkNQKBgQDRNF2MBOwl7yRcw0cOiCuXSnsO3310Mp9e",
  "Lwa7vzB+r83aMpSffeotsCE4kXw9y73GcmTOMACjRc6lFocCb5LP1uP/E8C9k8JD",
  "hGN2RHsgOeT0d4B6DaTzk2A8poFrf1AmmkMXcz/Ew9ec2+8M8bo8TxdcgHOtloPF",
  "VQa1m6wjDwKBgFBZudh3d1A/7tmZgRvhf7xY4d1dEpRlg7N16g8zqFE+O8oC7AoI",
  "XPTrvJ3Zv4TQvdm7KjQzUBiFaLT2INhgux934/B0LKLJnh4Z9iUSfUyg4uE62Ov3",
  "NmEVG7mqtXeX3aN3dMmwTY34Ay3zw8Hq2RZUCNNeiNw25oBQf6YFnhlxAoGAGook",
  "G/E77AwMduAnEYbg0M6YEej0R1tssEwS9JpqkofG+5lTFXCp1qXzcPOz6TsBlj1I",
  "4IdibVQbxQG4muyAmXFPdzqQRvyJtnsDCyvg2tO9Ye4PFGzKskPN/6O342VBS8Ri",
  "IoVyX4ngvnuANgoscB4wfoGlKy5fBRemRD+9dK0CgYEArNJRGGZBmccKWX+AZEmw",
  "REDjHqAEWt7jL8U4dF1yCfkNHVlKhDxKgRXARyOrHkLAy7NqQa3s/G96oHDN1Fs",
  "ujNmoGgbHCbSknXsfWR4kSOwabmy4hzwI2fHVmvvKW0QTZ7sZQGLiOCtxot3K9Hp",
  "5lTxvEaV/Y5OkRUk8Vapl7I="
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const targetLineIdx = 23;
const targetLine = lines[targetLineIdx];

console.log("Checking keys...");
let found = 0;

for (let pos = 0; pos <= targetLine.length; pos++) {
  for (let char of alphabet) {
    const modifiedLine = targetLine.slice(0, pos) + char + targetLine.slice(pos);
    const newLines = [...lines];
    newLines[targetLineIdx] = modifiedLine;
    const pem = "-----BEGIN PRIVATE KEY-----\n" + newLines.join("\n") + "\n-----END PRIVATE KEY-----\n";
    
    try {
      const keyObj = crypto.createPrivateKey(pem);
      // Sign some dummy data
      const sign = crypto.createSign('SHA256');
      sign.update('test');
      const signature = sign.sign(keyObj);
      
      // If we reach here, it's mathematically sound!
      console.log(`\nFound truly valid RSA private key!`);
      console.log(`Position: ${pos}, Character: '${char}'`);
      console.log(`Line 24: ${modifiedLine}`);
      found++;
    } catch (e) {
      // Failed validation
    }
  }
}

console.log(`\nVerification finished. Found ${found} mathematically valid keys.`);
