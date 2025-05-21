/*
  Warnings:

  - A unique constraint covering the columns `[property_id]` on the table `Location` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `property_id` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_path` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_location_id_fkey";

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "property_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "image_path" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Location_property_id_key" ON "Location"("property_id");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
