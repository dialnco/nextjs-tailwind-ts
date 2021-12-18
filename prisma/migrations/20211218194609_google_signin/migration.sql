/*
  Warnings:

  - Added the required column `updatedAt` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Account` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `refresh_token_expires_in` INTEGER NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `refresh_token` VARCHAR(500) NULL,
    MODIFY `access_token` VARCHAR(500) NULL,
    MODIFY `id_token` TEXT NULL;

-- AlterTable
ALTER TABLE `sessions` MODIFY `user_id` VARCHAR(191) NULL;
