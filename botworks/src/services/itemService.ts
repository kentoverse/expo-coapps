import { RestService } from './restService.js';
import { TodoItem } from '@/models/todoItem';

export class ItemService extends RestService<TodoItem> {
    public constructor(baseUrl: string, baseRoute: string) {
        super(baseUrl, baseRoute);
    }
}
