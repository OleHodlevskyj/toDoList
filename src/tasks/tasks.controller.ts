import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import  { Get } from '@nestjs/common';

export interface UpdateTaskDto{
    title?: string;
    description?: string;
    status?: boolean;
}


@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() data:{title:string, description: string, status:boolean}){
        return this.tasksService.createTask(data);
    }

    @Put(':id')
    updateTask(@Param('id') id:string, @Body() data:UpdateTaskDto){
        return this.tasksService.updateTask(Number(id), data);
    }

    @Delete(':id')
    deleteTask(@Param('id') id:string){
        return this.tasksService.deleteTask(Number(id));
    }
}
