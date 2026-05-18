import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";
import logo from "@assets/ChatGPT_Image_May_9__2025__08_47_46_PM-removebg-preview-1_1766990799947.png";

export default function EmploymentLetterPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      {/* Print Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { size: A4 portrait; margin: 20mm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white; }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:border-none { border: none !important; }
          .print\\:p-0 { padding: 0 !important; }
          .print\\:text-black { color: black !important; }
        }
      `}} />

      {/* Non-printable header and controls */}
      <div className="print:hidden bg-background border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setLocation("/")}>
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <h1 className="text-xl font-bold">Employment Letter - Oratile</h1>
            </div>
            <Button onClick={handlePrint} className="gap-2 bg-primary text-primary-foreground">
              <Download className="h-4 w-4" />
              Save as PDF / Print
            </Button>
          </div>
        </div>
      </div>

      {/* Printable Area - A4 Document */}
      <div className="max-w-4xl mx-auto mt-8 px-6 print:mt-0 print:px-0">
        <div className="bg-white p-12 md:p-16 rounded-sm shadow-md border print:shadow-none print:border-none print:p-0 print:text-black text-slate-800 font-serif max-w-[210mm] mx-auto min-h-[297mm]">
          
          {/* LETTERHEAD */}
          <div className="flex justify-between items-start border-b-2 border-slate-200 pb-8 mb-8">
            <div className="w-48">
              <img src={logo} alt="Career Plug AI" className="w-full h-auto object-contain" />
            </div>
            <div className="text-right text-sm text-slate-600">
              <h2 className="font-bold text-lg text-slate-800 mb-1">Career Plug AI (Pty) Ltd.</h2>
              <p>info@careerplugai.co.za</p>
              <p>+27 79 615 8762</p>
              <p>www.careerplugai.co.za</p>
            </div>
          </div>

          {/* LETTER CONTENT */}
          <div className="space-y-6 text-[11pt] leading-relaxed">
            <div className="flex justify-between font-medium">
              <p>Date: 03 April 2026</p>
              <p className="uppercase tracking-widest text-xs font-bold text-slate-500">Private and Confidential</p>
            </div>

            <div className="mt-8">
              <p><strong>To:</strong> Oratile Sebanyoni</p>
              <p className="mt-4 font-bold text-lg border-b pb-2">Subject: Offer of Volunteer Internship – Work Integrated Learning (WIL)</p>
            </div>

            <p>Dear Oratile,</p>

            <p>
              We are delighted to officially offer you a position as a <strong>Volunteer Operations Intern</strong> at <strong>Career Plug AI (Pty) Ltd</strong>. We are excited to support your Work Integrated Learning (WIL) requirements for your National N Diploma in Business Management.
            </p>

            <p>This letter sets out the terms and conditions of your volunteer internship with us:</p>

            <div className="space-y-4 pl-4">
              <div>
                <p className="font-bold">1. Position and Department</p>
                <p>You will be engaged as a Volunteer Operations Intern. In this role, your daily tasks will be structured to help you fulfill the practical requirements of your logbook, specifically focusing on Entrepreneurship & Business Management, Sales Management, and general operational administration.</p>
              </div>

              <div>
                <p className="font-bold">2. Duration of Internship</p>
                <p>Your internship will commence on <strong>02 February 2026</strong> and will conclude on <strong>30 July 2027</strong>. This 18-month period is designed to provide you with the comprehensive workplace experience required for your diploma.</p>
              </div>

              <div>
                <p className="font-bold">3. Working Hours</p>
                <p>Your standard working hours will be from <strong>08:00 AM to 04:00 PM, Monday to Friday</strong>.</p>
              </div>

              <div>
                <p className="font-bold">4. Remuneration</p>
                <p>Please note that this is a volunteer internship aimed at fulfilling your educational requirements. As such, this position is unpaid.</p>
              </div>

              <div>
                <p className="font-bold">5. Supervision and Mentorship</p>
                <p>Your direct supervisor will be <strong>Masego Diale (Project Lead)</strong>. Masego will be responsible for guiding your daily tasks, mentoring you, and signing off on your official TVET College Work Experience Logbook.</p>
                <ul className="list-disc list-inside mt-2 text-sm text-slate-600">
                  <li>Supervisor Contact: +27 79 615 8762</li>
                  <li>Supervisor Email: masego.diale@careerplugai.co.za</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">6. Duties and Responsibilities</p>
                <p>During your time with us, you will be exposed to various aspects of our business operations. Your responsibilities will include, but are not limited to:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Assisting with day-to-day business operations and administration.</li>
                  <li>Supporting the deployment and management of Career Plug AI Kiosks.</li>
                  <li>Observing and participating in strategic planning and customer relationship management.</li>
                  <li>Assisting the team with sales support and organizational tasks.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">7. Confidentiality</p>
                <p>During your internship, you will have access to confidential information regarding Career Plug AI, our partner schools, and student data. You are required to maintain strict confidentiality during and after your time with the company.</p>
              </div>
            </div>

            <p className="mt-6">
              Oratile, we believe that your time at Career Plug AI will be highly rewarding and will provide you with the practical foundation you need for a successful career in business management.
            </p>

            <p>To accept this offer, please sign and date this letter below.</p>

            <p>Yours sincerely,</p>

            {/* SIGNATURES */}
            <div className="grid grid-cols-2 gap-12 mt-12 pt-8">
              <div>
                <div className="border-b border-slate-400 h-8 w-full mb-2"></div>
                <p className="font-bold">Masego Diale</p>
                <p className="text-sm text-slate-600">Project Lead</p>
                <p className="text-sm text-slate-600">Career Plug AI (Pty) Ltd.</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-slate-200 border-dashed">
              <p className="font-bold text-lg mb-6 text-center">ACCEPTANCE OF OFFER</p>
              <p className="mb-8">I, <strong>Oratile Sebanyoni</strong>, acknowledge that I have read, understood, and accept the terms and conditions of this volunteer internship offer.</p>
              
              <div className="grid grid-cols-2 gap-12 mt-12">
                <div>
                  <div className="border-b border-slate-400 h-8 w-full mb-2"></div>
                  <p className="font-bold">Signature</p>
                </div>
                <div>
                  <div className="border-b border-slate-400 h-8 w-full mb-2"></div>
                  <p className="font-bold">Date</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}