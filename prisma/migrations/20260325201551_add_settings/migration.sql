-- AlterTable
ALTER TABLE "orders" ADD COLUMN "payment_method" TEXT;

-- CreateTable
CREATE TABLE "settings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "company_name" TEXT,
    "company_document" TEXT,
    "logo_path" TEXT,
    "images_directory" TEXT,
    "updated_at" DATETIME NOT NULL
);
