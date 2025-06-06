
terraform {
  backend "s3" {
    bucket = "your-terraform-state-bucket"
    key    = "vpc/terraform.tfstate"
    region = "us-east-1"
  }
}
