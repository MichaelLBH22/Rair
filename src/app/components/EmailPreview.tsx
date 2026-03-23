import { X } from 'lucide-react';
import { motion } from 'motion/react';

interface EmailPreviewProps {
  onClose: () => void;
}

const emailHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to RAIR</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    @media only screen and (max-width: 600px) {
      .main-container {
        width: 100% !important;
      }
      .header-padding {
        padding: 40px 24px 30px 24px !important;
      }
      .logo-text {
        font-size: 28px !important;
      }
      .header-title {
        font-size: 32px !important;
      }
      .body-padding {
        padding: 40px 24px 24px 24px !important;
      }
      .hero-text {
        font-size: 20px !important;
      }
      .footer-padding {
        padding: 30px 24px !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Inter', Arial, sans-serif;">
  <!-- Wrapper -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" class="main-container" style="margin: 0 auto; background-color: #ffffff; max-width: 600px;">
          
          <!-- Header -->
          <tr>
            <td class="header-padding" style="padding: 60px 60px 40px 60px; text-align: center; background-color: #000000;">
              <div style="margin-bottom: 24px;">
                <h1 class="logo-text" style="margin: 0; font-family: 'Playfair Display', Georgia, serif; font-size: 36px; font-weight: 400; color: #ffffff; letter-spacing: 0.25em; display: inline-block;">
                  RAIR
                </h1>
              </div>
              <h2 class="header-title" style="margin: 0; font-family: 'Playfair Display', Georgia, serif; font-size: 42px; font-weight: 400; color: #ffffff; letter-spacing: -0.02em; line-height: 1.2;">
                We're sorry
              </h2>
            </td>
          </tr>

          <!-- Hero Message -->
          <tr>
            <td class="body-padding" style="padding: 50px 60px 30px 60px; text-align: center;">
              <p class="hero-text" style="margin: 0; font-family: 'Inter', Arial, sans-serif; font-size: 24px; font-weight: 300; color: #000000; line-height: 1.5;">
                Your appearance didn't exactly meet our profile expectations.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer-padding" style="padding: 40px 60px; text-align: center;">
              <p style="margin: 0; font-family: 'Inter', Arial, sans-serif; font-size: 12px; font-weight: 400; color: #cccccc; line-height: 1.6;">
                © 2026 RAIR. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
        <!-- End Main Container -->
      </td>
    </tr>
  </table>
  <!-- End Wrapper -->
</body>
</html>`;

export function EmailPreview({ onClose }: EmailPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white w-full max-w-4xl h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              fontWeight: 400,
            }}
          >
            Welcome Email Preview
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Email Container */}
        <div className="flex-1 overflow-auto bg-neutral-100 p-8">
          <div className="max-w-[600px] mx-auto bg-white shadow-lg">
            {/* Email Content */}
            <iframe
              srcDoc={emailHtml}
              title="Email Preview"
              className="w-full h-[800px] border-0"
              sandbox="allow-same-origin"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-neutral-200 bg-neutral-50">
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
              color: '#666',
              textAlign: 'center',
            }}
          >
            This email will be sent to users when they sign up for RAIR
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}