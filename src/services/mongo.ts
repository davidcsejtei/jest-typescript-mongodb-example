import mongoose from 'mongoose';
import { Project, ProjectInterface } from '../db/models/Project';

export async function connectDb(mongoUrl: string) {
    return await mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export async function addNewProject(project: Partial<ProjectInterface>) {
    const newProject = new Project({ name: project.name, description: project.description });
    return await newProject.save();
}

export async function getAllProjects() {
    return await Project.find();
}