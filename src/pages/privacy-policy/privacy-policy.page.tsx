"use client";

import React from "react";
import { AnimateFromBottom } from "@/common/animateFromBottom/animateFromBottom.common";
import { Stack, Typography, Container } from "@mui/material";
import "./styles.scss";

export const PrivacyPolicy: React.FC = () => {
  return (
    <Container maxWidth="lg" className="privacy-policy-container">
   
        <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
        >
            <Typography variant="h1">Privacy Policy</Typography>
            {/* <Typography variant="body2" className="last-updated">
                Last Updated: [03, 11, 2025]
            </Typography> */}
        </Stack>
      <AnimateFromBottom>
        <Stack spacing={4} className="privacy-policy-content">
          <Typography variant="h1">Privacy Policy</Typography>
          <Typography variant="body2" className="last-updated">
            Last Updated: [03, 11, 2025]
          </Typography>

          <section>
            <Typography variant="h2">1. Introduction</Typography>
            <Typography>
              Welcome to Cedge ("we," "our," or "us"). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (the "Site") or use our services.
            </Typography>
            <Typography>
              By accessing or using our site, you agree to the practices described in this Privacy Policy. If you do not agree with the terms of this Policy, please discontinue use of our Site immediately.
            </Typography>
          </section>

          <section>
            <Typography variant="h2">2. Information We Collect</Typography>
            <Typography>
              We may collect both personally identifiable information ("Personal Information") and non-personally identifiable information ("Usage Data") in a variety of ways:
            </Typography>
            <Typography variant="h3">Personal Information:</Typography>
            <ul>
              <li>
                <Typography>
                  Contact details such as your name, email address, phone number, or postal address if you choose to submit an inquiry or sign up for any newsletter or service.
                </Typography>
              </li>
              <li>
                <Typography>
                  Professional details such as your organization or title if you are accessing our services in a business context.
                </Typography>
              </li>
              <li>
                <Typography>
                  Resume/CV information if you apply for a position through our Site.
                </Typography>
              </li>
            </ul>
            <Typography variant="h3">Usage Data:</Typography>
            <ul>
              <li>
                <Typography>
                  Technical information such as your IP address, browser type, operating system, device information, and referring website.
                </Typography>
              </li>
              <li>
                <Typography>
                  Browsing behavior including pages viewed, links clicked, and other usage statistics.
                </Typography>
              </li>
            </ul>
            <Typography>
              We only collect information that is relevant and necessary to fulfill the purposes described in this Privacy Policy.
            </Typography>
          </section>

          <section>
            <Typography variant="h2">3. How We Use Your Information</Typography>
            <Typography>
              We use the information we collect for purposes such as:
            </Typography>
            <Typography variant="h3">Providing and Improving Services:</Typography>
            <ul>
              <li>
                <Typography>
                  To respond to your inquiries, process requests, and communicate with you about our offerings.
                </Typography>
              </li>
              <li>
                <Typography>
                  To enhance, customize, and personalize user experience on our Site.
                </Typography>
              </li>
            </ul>
            <Typography variant="h3">Business Operations:</Typography>
            <ul>
              <li>
                <Typography>
                  To maintain our internal records, perform data analysis, troubleshoot, and enhance security.
                </Typography>
              </li>
              <li>
                <Typography>
                  To conduct research and analysis to improve our services and develop new features.
                </Typography>
              </li>
            </ul>
            <Typography variant="h3">Marketing and Communications:</Typography>
            <ul>
              <li>
                <Typography>
                  To send newsletters, updates, and promotional materials if you have opted to receive them.
                </Typography>
              </li>
              <li>
                <Typography>
                  To contact you about products, services, and events that may be of interest.
                </Typography>
              </li>
            </ul>
            <Typography variant="h3">Legal Compliance and Security:</Typography>
            <ul>
              <li>
                <Typography>
                  To protect our rights, privacy, safety, or property and/or that of our affiliates, you, or others.
                </Typography>
              </li>
              <li>
                <Typography>
                  To comply with applicable laws, regulations, and legal processes or respond to lawful requests.
                </Typography>
              </li>
            </ul>
          </section>

          <section>
            <Typography variant="h2">4. Cookies and Similar Technologies</Typography>
            <Typography>
              Our Site may use "cookies" and similar tracking technologies to collect Usage Data and distinguish you from other users of our Site. This helps us deliver a better and more personalized experience. You can control the use of cookies at the browser level; however, if you choose to disable cookies, you may not be able to access certain features of our Site.
            </Typography>
          </section>

          <section>
            <Typography variant="h2">5. How We Share and Disclose Information</Typography>
            <Typography>
              We will not sell, rent, or lease your Personal Information to third parties. We may share or disclose your information in the following situations:
            </Typography>
            <Typography variant="h3">Service Providers:</Typography>
            <ul>
              <li>
                <Typography>
                  With trusted third-party vendors, consultants, and service providers who perform services on our behalf, such as website hosting, data analysis, email delivery, or customer service.
                </Typography>
              </li>
            </ul>
            <Typography variant="h3">Legal Obligations:</Typography>
            <ul>
              <li>
                <Typography>
                  Where required by law or in response to valid requests by public authorities.
                </Typography>
              </li>
            </ul>
            <Typography variant="h3">Business Transfers:</Typography>
            <ul>
              <li>
                <Typography>
                  In connection with any merger, sale, financing, or transfer of all or a portion of our business to another entity.
                </Typography>
              </li>
            </ul>
            <Typography variant="h3">With Your Consent:</Typography>
            <ul>
              <li>
                <Typography>
                  We may share your information for any other purpose disclosed to you at the time we collect your information or pursuant to your consent.
                </Typography>
              </li>
            </ul>
          </section>

          <section>
            <Typography variant="h2">6. Data Retention</Typography>
            <Typography>
              We retain your Personal Information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. After this period, we will securely delete or anonymize your Personal Information.
            </Typography>
          </section>

          <section>
            <Typography variant="h2">7. International Data Transfers</Typography>
            <Typography>
              If we transfer your information to a country other than your own, we will ensure such a transfer is done in accordance with applicable data protection laws and that appropriate safeguards are in place to protect your Personal Information.
            </Typography>
          </section>

          <section>
            <Typography variant="h2">8. Data Security</Typography>
            <Typography>
              We are committed to protecting your Personal Information. We implement commercially reasonable administrative, technical, and physical security measures to help safeguard your data against loss, misuse, or unauthorized access. However, no data transmission or storage system can be guaranteed to be 100% secure.
            </Typography>
          </section>

          <section>
            <Typography variant="h2">9. Children's Privacy</Typography>
            <Typography>
              Our Site and services are not directed at children under the age of 13 (or other relevant age under applicable local laws). We do not knowingly collect Personal Information from children. If you become aware that a child has provided us with Personal Information without parental consent, please contact us, and we will take steps to remove such information and terminate the account if applicable.
            </Typography>
          </section>

          <section>
            <Typography variant="h2">10. Your Rights and Choices</Typography>
            <Typography>
              Depending on your jurisdiction, you may have certain rights over your Personal Information, such as the right to access, correct, or delete the data we hold about you. To exercise these rights, please contact us using the details in the "Contact Us" section below.
            </Typography>
            <Typography>
              <strong>Opt-Out of Marketing Communications:</strong> You can unsubscribe from our marketing emails by following the unsubscribe instructions included in those emails or by contacting us directly.
            </Typography>
            <Typography>
              <strong>Access and Update Information:</strong> You have the right to request access to the Personal Information we hold about you, or to update or correct any inaccuracies.
            </Typography>
          </section>

          <section>
            <Typography variant="h2">11. Third-Party Links</Typography>
            <Typography>
              Our Site may contain links to third-party websites or services that are not operated by us. We are not responsible for the content, privacy practices, or security of these third-party websites. We encourage you to review the privacy policies of any external sites you visit.
            </Typography>
          </section>

          <section>
            <Typography variant="h2">12. Changes to This Privacy Policy</Typography>
            <Typography>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes, we will update the "Last Updated" date at the top of this page. Your continued use of our Site after such changes indicates your acceptance of the updated Policy.
            </Typography>
          </section>

          <section>
            <Typography variant="h2">13. Contact Us</Typography>
            <Typography>
              If you have any questions, comments, or concerns about this Privacy Policy or our data practices, or if you wish to exercise your rights regarding your Personal Information, please contact us at:
            </Typography>
            <Typography component="div" className="contact-info">
              <strong>Email:</strong> <a href="mailto:info@cedge.com">info@cedge.com</a> <br />
              <strong>Address:</strong> <div style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", maxWidth: "200px" ,color: "black"}}>4269 King Abdul Aziz Rd, Al Murjan, Jeddah, Saudi Arabia</div>
            </Typography>
            <Typography>
              We will address your inquiry promptly and work with you to find a satisfactory resolution to any privacy concerns you may have.
            </Typography>
            <Typography>
              Thank you for trusting Cedge with your information. We are committed to safeguarding your privacy and handling your Personal Information responsibly.
            </Typography>
          </section>
        </Stack>
      </AnimateFromBottom>
    </Container>
  );
};