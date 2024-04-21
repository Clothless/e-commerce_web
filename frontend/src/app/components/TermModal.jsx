
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function TermModal({handleDisable}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button className="terms" onClick={() => setOpenModal(true)}>Terms and Conditions</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms and Conditions</Modal.Header>
        <Modal.Body>
        These terms and conditions govern your use of E-sog website, owned and operated by E-sog Inc. By accessing or using the Marketplace, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the Marketplace.

        <h4 className="text-lg mt-4 mb-1">1. Membership</h4>

        <span className="font-bold text-sm">1.1</span> <p className="inline text-sm">You must be at least 18 years old to use the Marketplace.</p><br/>

        <span className="font-bold text-sm">1.2</span> <p className="inline text-sm">By registering for an account on the Marketplace, you agree to provide accurate, current, and complete information about yourself as prompted by the registration form.</p><br/>

        <span className="font-bold text-sm">1.3</span> <p className="inline text-sm">You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.</p><br/>

        <h4 className="text-lg mt-4 mb-1">2. Listings and Transactions</h4>

        <span className="font-bold text-sm">2.1</span> <p className="inline text-sm">Users may list items for sale on the Marketplace. All listings must comply with our Listing Policy.</p><br/>

        <span className="font-bold text-sm">2.2</span> <p className="inline text-sm">Users may purchase items listed on the Marketplace. All transactions are subject to our Transaction Policy.</p><br/>

        <span className="font-bold text-sm">2.3</span> <p className="inline text-sm">We reserve the right to remove any listings or suspend any transactions that violate these Terms or any applicable laws.</p><br/>

        <h4 className="text-lg mt-4 mb-1">3. Fees and Payments</h4>

        <span className="font-bold text-sm">3.1</span> <p className="inline text-sm">Listing items on the Marketplace is free. However, we may charge fees for certain services, such as featured listings or premium memberships. Any applicable fees will be clearly disclosed to you before you incur them.</p><br/>

        <span className="font-bold text-sm">3.2</span> <p className="inline text-sm">Payments for items purchased on the Marketplace will be processed through our payment gateway. By making a purchase, you agree to abide by the terms and conditions of our payment gateway provider.</p><br/>

        <h4 className="text-lg mt-4 mb-1">4. User Conduct</h4>

        <span className="font-bold text-sm">4.1</span> <p className="inline text-sm">You agree not to use the Marketplace for any unlawful purpose or in any way that violates these Terms.</p><br/>

        <span className="font-bold text-sm">4.2</span> <p className="inline text-sm">You agree not to engage in any activity that could damage, disable, or impair the operation of the Marketplace.</p><br/>

        <span className="font-bold text-sm">4.3</span> <p className="inline text-sm">You agree not to upload or transmit any viruses, worms, or other malicious code.</p><br/>

        <h4 className="text-lg mt-4 mb-1">5. Intellectual Property</h4>

        <span className="font-bold text-sm">5.1</span> <p className="inline text-sm">All content and materials available on the Marketplace, including but not limited to text, graphics, logos, images, and software, are the property of [Your Company Name] or its licensors and are protected by copyright, trademark, and other intellectual property laws.</p><br/>

        <span className="font-bold text-sm">5.2</span> <p className="inline text-sm">You may not reproduce, distribute, or display any content from the Marketplace without the prior written consent of [Your Company Name].</p><br/>

        <h4 className="text-lg mt-4 mb-1">6. Disclaimer of Warranties</h4>

        <span className="font-bold text-sm">6.1</span> <p className="inline text-sm">The Marketplace is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied.</p><br/>

        <span className="font-bold text-sm">6.2</span> <p className="inline text-sm">E-sog Inc. makes no representations or warranties about the accuracy, reliability, completeness, or timeliness of the content or materials provided on the Marketplace.</p><br/>

        <h4 className="text-lg mt-4 mb-1">7. Limitation of Liability</h4>

        <span className="font-bold text-sm">7.1</span> <p className="inline text-sm">To the fullest extent permitted by law, E-sog Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Marketplace; (ii) any conduct or content of any third party on the Marketplace; or (iii) unauthorized access, use, or alteration of your transmissions or content.</p><br/>

        <h4 className="text-lg mt-4 mb-1">8. Indemnification</h4>

        <span className="font-bold text-sm">8.1</span> <p className="inline text-sm">You agree to indemnify and hold E-sog Inc. harmless from any claims, damages, liabilities, costs, or expenses (including attorneys' fees) arising out of or related to your use of the Marketplace or any violation of these Terms.</p><br/>

        <h4 className="text-lg mt-4 mb-1">9. Governing Law</h4>

        <span className="font-bold text-sm">9.1</span> <p className="inline text-sm">These Terms shall be governed by and construed in accordance with the laws of Ministry of justice, without regard to its conflict of law principles.</p><br/>

        <h4 className="text-lg mt-4 mb-1">10. Changes to Terms</h4>

        <span className="font-bold text-sm">10.1</span> <p className="inline text-sm">E-sog Inc. reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the Marketplace. Your continued use of the Marketplace after the posting of revised Terms constitutes your acceptance of such changes.</p><br/>

        <h4 className="text-lg mt-4 mb-1">11. Contact Us</h4>

        <span className="font-bold text-sm">11.1</span> <p className="inline text-sm">If you have any questions about these Terms, please contact us at [Your Contact Information].</p><br/>
        </Modal.Body>
        <Modal.Footer>
          <Button className="accept bg-[#2892d7] enabled:hover:bg-[#5AC9F4] transition-colors ease-out duration-200" onClick={() => {
            setOpenModal(false);
            handleDisable(false);
          }}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
