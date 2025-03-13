import React from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'
import { cn } from "@/lib/utils"

type ButtonProps = React.ComponentProps<typeof Button>

interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ 
    children, 
    className, 
    variant = "default", 
    size = "default", 
    isLoading = false, 
    leftIcon, 
    rightIcon, 
    fullWidth = false,
    disabled,
    ...props 
  }, ref) => {
    return (
      <Button
        className={cn(
          "flex items-center gap-2",
          fullWidth && "w-full",
          className
        )}
        variant={variant}
        size={size}
        disabled={isLoading || disabled}
        ref={ref}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </Button>
    )
  }
)

CustomButton.displayName = "CustomButton"

export { CustomButton }