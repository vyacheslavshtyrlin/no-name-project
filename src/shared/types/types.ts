export namespace APITYPES {
  export namespace USER {
    export type T = {
      username: string;
      token: string;
      password: string;
    };
  }

  export namespace ANSWER {
    export type T = {
      id: number;
      site: string;
      date: string;
      is_checked_by_admin: boolean;
      listener1: string;
      listener2: string;
      project: {
        name: string;
        description: string;
      };

      mobile_tel?: string;
      email?: string;
      comments?: Comment[];
      name: string | null;
      assigned?: string;
      success_date?: string;
      assigned_id: number;
      updated: string;
      transfer_phone: string;
      calls: { date: string; call: string }[];
    };
  }
}

export namespace REQTYPES {
  export namespace MOTIVATION {
    export const URL = "/v1/motivation" as const;
  }

  export namespace LOGIN {
    export const URL = "v1/auth";
    export type REQ = {
      login: string;
      password: string;
    };
  }

  export namespace ANSWER {
    export namespace GetAnswerById {
      export const URL = 'v1/answer'
    }
    export namespace GetQueueAnswer {
      export const URL = "v1/getqueueanswer" as const;

      export type Req = {
        user_id: number;
        user_name: string;
      };

      export type Resp = APITYPES.ANSWER.T;
    }
  }
}
