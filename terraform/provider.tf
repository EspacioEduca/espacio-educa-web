# Proveedor específico para certificados (siempre debe ser us-east-1)
provider "aws" {
  alias   = "us_east_1"
  region  = "us-east-1"
  profile = "espacio-educa"
}

terraform {
  required_version = ">= 1.0.0"
  
  backend "s3" {
    bucket         = "espacio-educa-tf-state" # El que creamos en Paso 0
    key            = "web/terraform.tfstate"
    region         = "us-east-1"
    use_lockfile      = true
  }
}