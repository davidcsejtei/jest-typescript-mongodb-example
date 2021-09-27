import mongoose from 'mongoose';
import { ProjectInterface } from '../db/models/Project';

import {
    addNewProject,
    connectDb,
    getAllProjects
} from './mongo';

describe('MongoDB service', () => {
    let mongoClient: typeof mongoose;

    const project: Partial<ProjectInterface> = {
        name: 'A brand new project',
        description: 'This is a project in my system.'
    }

    beforeAll(async () => {
        mongoClient = await connectDb(process.env.MONGO_URL as string);
    });

    afterAll(async () => {
        await mongoClient.connection.close();
    });

    afterEach(async () => {
        await mongoClient.connection.db.dropDatabase();
    });

    describe('Projects', () => {
        test('Add new project and get all projects', async () => {
            await addNewProject(project);
            await addNewProject(project);

            let projects = await getAllProjects();

            expect(projects.length).toBe(2);
        });
    });
});
