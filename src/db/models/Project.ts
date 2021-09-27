import mongoose, { Model, Schema } from "mongoose";

export interface ProjectInterface extends Document {
    name: string,
    description: string
}

export const ProjectSchema = new Schema(
    {
        name: 'string',
        description: 'string'
    }
);

export const Project: Model<ProjectInterface> = mongoose.model<ProjectInterface>('Project', ProjectSchema);