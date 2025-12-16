"use client"
import { Eye, RotateCw, Save } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import CVPreview from "@/components/preview/CVPreview";
import PersonalDetailsForm from "@/components/editor/PersonalDetailsForm";
import ExperienceForm from "@/components/editor/ExperienceForm";
import EducationForm from "@/components/editor/EducationForm";
import LanguageForm from "@/components/editor/LanguageForm";
import SkillForm from "@/components/editor/SkillForm";
import HobbyForm from "@/components/editor/HobbyForm";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import confetti from "canvas-confetti"
import { useCV } from "@/context/CVContext";

export default function Home() {
  const {
    theme,
    setTheme,
    resetPersonalDetails,
    resetExperiences,
    resetEducations,
    resetLanguages,
    resetSkills,
    resetHobbies
  } = useCV();

  const [zoom, setZoom] = useState<number>(163)
  const cvPreviewRef = useRef<HTMLDivElement>(null)

  const themes = [
    "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
    "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
    "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula",
    "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee",
    "winter", "dim", "nord", "sunset",
  ]

  const handleDownloadPdf = async () => {
    const element = cvPreviewRef.current
    if (element) {
      try {
        const canvas = await html2canvas(element as HTMLElement, {
          scale: 3,
          useCORS: true,
        })
        const imgData = canvas.toDataURL('image/png')

        const pdf = new jsPDF({
          orientation: "portrait",
          unit: 'mm',
          format: "A4"
        })

        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`cv.pdf`)

        const modal = document.getElementById('my_modal_3') as HTMLDialogElement
        if (modal) {
          modal.close()
        }

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          zIndex: 9999
        })

      } catch (error) {
        console.error('Erreur lors de la génération du PDF :', error);
      }
    }
  }

  return (
    <div>
      <div className="hidden lg:block">
        <section className="flex items-center h-screen">

          <div className="w-1/3 h-full p-10 bg-base-200 scrollable no-scrollbar ">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold italic">
                CV
                <span className="text-primary">Builder</span>

              </h1>

              <button className="btn btn-primary" onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}>
                Prévisualiser
                <Eye className="w-4" />
              </button>
            </div>

            <div className="flex  flex-col gap-6 rounded-lg">

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Qui êtes-vous ?</h1>
                <button
                  onClick={resetPersonalDetails}
                  className="btn btn-primary btn-sm">
                  <RotateCw className="w-4" />
                </button>
              </div>

              <PersonalDetailsForm />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Expériences</h1>
                <button
                  onClick={resetExperiences}
                  className="btn btn-primary btn-sm">
                  <RotateCw className="w-4" />
                </button>
              </div>

              <ExperienceForm />


              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Éducations</h1>
                <button
                  onClick={resetEducations}
                  className="btn btn-primary btn-sm">
                  <RotateCw className="w-4" />
                </button>
              </div>

              <EducationForm />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Langues</h1>
                <button
                  onClick={resetLanguages}
                  className="btn btn-primary btn-sm">
                  <RotateCw className="w-4" />
                </button>
              </div>

              <LanguageForm />

              <div className="flex justify-between">

                <div className="w-1/2">
                  <div className="flex justify-between items-center">
                    <h1 className="badge badge-primary badge-outline">Compétences</h1>
                    <button
                      onClick={resetSkills}
                      className="btn btn-primary btn-sm">
                      <RotateCw className="w-4" />
                    </button>
                  </div>
                  <SkillForm />
                </div>

                <div className="ml-4 w-1/2">
                  <div className="flex justify-between items-center">
                    <h1 className="badge badge-primary badge-outline">Loisirs</h1>
                    <button
                      onClick={resetHobbies}
                      className="btn btn-primary btn-sm">
                      <RotateCw className="w-4" />
                    </button>
                  </div>
                  <HobbyForm />
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/3 h-full bg-base-100 bg-[url('/file.svg')] bg-cover  bg-center scrollable-preview relative">

            <div className="flex items-center justify-center fixed z-[9999] top-5 right-5">
              <input
                type="range"
                min={50}
                max={200}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="range range-xs range-primary" />
              <p className="ml-4 text-sm text-primary">{zoom}%</p>
            </div>

            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="select select-bordered fixed z-[9999] select-sm top-12 right-5"
            >
              {themes.map((themeName) => (
                <option key={themeName} value={themeName}>
                  {themeName}
                </option>
              ))}
            </select>

            <div
              className="flex justify-center items-center"
              style={{
                transform: `scale(${zoom / 200})`
              }}
            >
              <CVPreview />
            </div>

          </div>

        </section>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-full max-w-6xl mx-auto px-4 sm;px-6 lg:px-8">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <div className="mt-5">
              <div className="flex justify-end mb-5">
                <button onClick={handleDownloadPdf} className="btn btn-primary">
                  Télécharger
                  <Save className='w-4' />
                </button>
              </div>

              <div className="w-full max-x-full overflow-auto">
                <div className="w-full max-w-full flex justify-center items-center">
                  <CVPreview
                    download={true}
                    ref={cvPreviewRef}
                  />
                </div>
              </div>

            </div>
          </div>
        </dialog>

      </div>

      <div className="lg:hidden">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">Désolé, le CV Builder est uniquement accessible sur ordinateur.</h1>
              <Image
                src="/sad-sorry.gif"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mx-auto my-6"
              />
              <p className="py-6">
                Pour créer et personnaliser votre CV, veuillez utiliser un ordinateur. Nous vous remercions de votre compréhension.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
