import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TasksService {
    constructor(private prisma: PrismaService) {}

    getAllTasks() {
        return this.prisma.task.findMany();
    }

    createTask(data: { title: string; description?: string; status?: boolean }) {
        return this.prisma.task.create({data})
    }

    updateTask(id: number, data: any) {
        return this.prisma.task.update({
            where: { id },
            data
        });
    }

    deleteTask(id: number) {
        return this.prisma.task.delete({ where: { id } });
    }
}
