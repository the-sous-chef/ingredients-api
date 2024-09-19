import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from '@/modules/root/root.controller.js';

describe('AppController', () => {
    let rootController: RootController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [RootController],
        }).compile();

        rootController = app.get<RootController>(RootController);
    });

    describe('root', () => {
        it('should return "Ok"', () => {
            expect(rootController.livecheck()).toBe('Ok');
        });
    });
});
