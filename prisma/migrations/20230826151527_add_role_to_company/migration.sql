/*
  Warnings:

  - You are about to alter the column `manufacturer` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "role" "CompanyRole" NOT NULL DEFAULT 'SELLER';

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "manufacturer" SET DATA TYPE VARCHAR(20);
