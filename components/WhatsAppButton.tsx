import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber: string
  message: string
}

export function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <Button onClick={handleClick} className="bg-green-500 hover:bg-green-600 text-white">
      Chat on WhatsApp
    </Button>
  )
}

