type PostReactionType =
    | {
          userId: string;
          type: 'REPORT';
          materialId: string;
      }
    | {
          userId: string;
          type: 'LIKE';
          materialId: string;
      }
    | {
          userId: string;
          type: 'FAVORITE';
          materialId?: string | undefined;
          disciplineId?: string | undefined;
      };

export type { PostReactionType };
