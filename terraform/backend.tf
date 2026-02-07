provider "aws" {
  region  = var.aws_region
  profile = "espacio-educa"

  default_tags {
    tags = {
      Project     = "Espacio Educa"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}